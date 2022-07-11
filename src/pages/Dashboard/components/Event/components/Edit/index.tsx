import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setEvents } from '~/reducers'
import api from '~/services/Api'
import { RootState } from '~/store'

import { ButtonContainer, Container, Content, DateText, Input, Presentation } from './styles'

const Edit: React.FC<Props> = ({ eventId, modalExit }) => {
  const [event, setEvent] = useState<TEvent>()
  const [title, setTitle] = useState('')
  const [abstract, setAbstract] = useState('')
  const [presents, setPresents] = useState<Presentation[]>([])

  const dispatch = useDispatch()
  const events = useSelector<RootState, TEvent[]>(({ mainState }) => mainState.events)

  const formatDate = (dateStr: string | undefined) => {
    if (dateStr !== undefined) {
      return new Date(dateStr).toLocaleString('pt-BR', { dateStyle: 'medium' })
    }
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  const onAbstractChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAbstract(e.target.value)

  const handleSave = async () => {
    const { data, status } = await api.put(`/events/${eventId}`, { title, presentations: presents })

    if (status.toString().startsWith('2')) {
      const newEvents = events.map((event) => (event.id === eventId ? data : event))

      dispatch(setEvents([...newEvents]))
      modalExit()
    }
  }

  const editPresentation = (
    event: React.ChangeEvent<HTMLInputElement>,
    pres: Presentation,
    field: string
  ) => {
    const newPres = Object.assign(pres, JSON.parse(`{\"${field}\": \"${event.target.value}\"}`))

    const newPresentations = presents.map((_pres) => (_pres.id === pres.id ? newPres : _pres))

    setPresents(newPresentations)
  }

  useEffect(() => {
    const fetchEvent = async () => {
      const { data, status } = await api.get<TEvent>(`/events/${eventId}`)

      if (status.toString().startsWith('2')) {
        setEvent(data)
        setTitle(data.title)
        setAbstract('abstract')
        setPresents(data.presentations)
      }
    }

    fetchEvent()
  }, [eventId])

  return (
    <Container>
      <Content>
        <Input value={title} onChange={onTitleChange} />
        <DateText>
          Criado em {formatDate(event?.created_at)} | Última edição em{' '}
          {formatDate(event?.updated_at)}
        </DateText>
        <Input value={abstract} as='textarea' onChange={onAbstractChange} />
        <Presentation>
          {presents.map((pres, i) => (
            <Presentation.Item eventKey={String(i)} key={i}>
              <Presentation.Header>
                <Input
                  value={pres.title}
                  onChange={(e: any) => editPresentation(e, pres, 'title')}
                />
              </Presentation.Header>
              <Presentation.Body>{pres.date}</Presentation.Body>
            </Presentation.Item>
          ))}
        </Presentation>
      </Content>
      <ButtonContainer>
        <Button size='sm' className='mx-2' variant='outline-secondary' onClick={modalExit}>
          Cancelar
        </Button>
        <Button size='sm' onClick={handleSave}>
          Salvar
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Edit

type Props = {
  eventId: string | undefined
  modalExit: () => void
}
