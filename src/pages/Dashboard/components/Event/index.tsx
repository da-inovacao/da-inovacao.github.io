import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEvents } from '~/reducers'
import api from '~/services/Api'
import { RootState } from '~/store'

import { Container, EventContainer, Title } from './styles'

const Event: React.FC = () => {
  const events = useSelector<RootState, TEvent[]>(({ mainState }) => mainState.events)

  const dispatch = useDispatch()

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleString('pt-BR', { dateStyle: 'short' })

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
          <Title>{event.title}</Title>
          <Title>{formatDate(event.created_at)}</Title>
        </EventContainer>
      ))}
    </Container>
  )
}

export default Event
