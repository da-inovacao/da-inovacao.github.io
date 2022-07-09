import React, { useEffect, useState } from 'react'
import Navbar from '~/components/Navbar'

import { Container, Panel, PanelContent } from './styles'
import Notice from './components/Notice'

import Firebase from '~/services/Api'

const Dashboard: React.FC = () => {
  const [notices, setNotice] = useState<_Notices[]>()

  const sanitizeNotices = (data: NoticesFirebase) => {
    const noticesKeys = Object.keys(data)
    const sanitizedNotices: _Notices[] = []

    for (let key of noticesKeys) {
      const _notice = data[key]
      sanitizedNotices.push(Object.assign(_notice, { id: key }))
    }

    return sanitizedNotices
  }

  useEffect(() => {
    const fetchNotices = async () => {
      const { data } = await Firebase.get<NoticesFirebase>('/notices.json')

      setNotice(sanitizeNotices(data))
    }

    fetchNotices()
  }, [])

  return (
    <Container>
      <Navbar />
      <Panel>
        <text className='text-primary'>Notícias</text>
        <PanelContent>
          {notices?.map((notice) => (
            <Notice notice={notice} />
          ))}
        </PanelContent>
      </Panel>
      <Panel>
        <text>Eventos</text>
      </Panel>
    </Container>
  )
}

export default Dashboard
