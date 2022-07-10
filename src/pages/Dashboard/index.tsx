import React, { useEffect, useState } from 'react'
import Navbar from '~/components/Navbar'

import { Container, Panel, PanelContent } from './styles'
import Notice from './components/Notice'

import api from '~/services/Api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/store'
import { setEvents, setNotices } from '~/reducers'

const Dashboard: React.FC = () => {
  const notices = useSelector<RootState, _Notices[]>(({ mainState }) => mainState.notices)
  const events = useSelector<RootState, TEvent[]>(({ mainState }) => mainState.events)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchNotices = async () => {
      const { data } = await api.get('/notices')

      dispatch(setNotices(data))
    }
    const fetchEvents = async () => {
      const { data } = await api.get('/events')

      dispatch(setEvents(data))
    }

    fetchNotices()
    fetchEvents()
  }, [])

  return (
    <Container>
      <Navbar />
      <Panel>
        <span className='text-primary'>Notícias</span>
        <PanelContent>
          {notices?.map((notice) => (
            <Notice key={notice.id} notice={notice} />
          ))}
        </PanelContent>
      </Panel>
      <Panel>
        <span className='text-primary'>Eventos</span>
        <PanelContent>{events?.map((event) => JSON.stringify(event))}</PanelContent>
      </Panel>
    </Container>
  )
}

export default Dashboard
