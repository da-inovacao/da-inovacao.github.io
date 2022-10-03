import React from 'react'
import Navbar from '~/components/Navbar'

import Event from './components/Event'
import Notice from './components/Notice'
import { Container, Panel, PanelContent } from './styles'


const Dashboard: React.FC = () => {

  return (
    <Container>
      <Navbar showLogin={false}/>
      <Panel>
        <span className='text-primary'>Notícias</span>
        <PanelContent>
          <Notice />
        </PanelContent>
      </Panel>
      <Panel>
        <span className='text-primary'>Eventos</span>
        <PanelContent>
          <Event />
        </PanelContent>
      </Panel>
    </Container>
  )
}

export default Dashboard
