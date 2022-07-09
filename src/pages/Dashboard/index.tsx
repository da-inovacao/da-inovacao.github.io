import React, { useEffect, useState } from 'react'
import Navbar from '~/components/Navbar'

import { Container, Panel, PanelContent } from './styles'
import Notice from './components/Notice'

import api from '~/services/Api'

const Dashboard: React.FC = () => {
  const [notices, setNotices] = useState<_Notices[]>([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchNotices = async () => {
      const { data } = await api.get('/notices')

      setNotices(data)
    }
    const fetchEvents = async () => {
      const { data } = await api.get('/events')

      setEvents(data)
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
