import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'

import { setEvents } from '~/reducers'
import api from '~/services/Api'
import { RootState } from '~/store'
import Edit from './components/Edit'

import { Button, Col, Container, DateText, EventContainer, Title } from './styles'

Modal.setAppElement('body')

const customStyle = {
  content: {},
  overlay: {
    zIndex: 4000,
  },
}

const Event: React.FC = () => {
  const events = useSelector<RootState, TEvent[]>(({ mainState }) => mainState.events)
  const [isEditting, setIsEditting] = useState(false)
  const [eventToEdit, setEventToEdit] = useState<TEvent | undefined>()

  const dispatch = useDispatch()

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleString('pt-BR', { dateStyle: 'medium' })

  const handleExit = () => setIsEditting(false)

  const handleEdit = (event: TEvent) => {
    setEventToEdit(event)
    setIsEditting(true)
  }

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await api.get('/events')

      dispatch(setEvents(data))
    }

    fetchEvents()
  }, [])

  return (
    <Container>
      {events?.map((event) => (
        <EventContainer key={event.id}>
          <Col>
            <Title>{event.title}</Title>
            <DateText>{formatDate(event.created_at)}</DateText>
          </Col>
          <Button onClick={() => handleEdit(event)}>
            <FontAwesomeIcon icon={faChevronRight} color='#0591e7' />
          </Button>
        </EventContainer>
      ))}
      <Modal isOpen={isEditting} style={customStyle} onRequestClose={handleExit}>
        <Edit eventId={eventToEdit?.id} modalExit={handleExit} />
      </Modal>
    </Container>
  )
}

export default Event
