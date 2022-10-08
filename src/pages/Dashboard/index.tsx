import React from 'react'
import Navbar from '~/components/Navbar'

import Event from './components/Event'
import Certificates from './components/Certificates'
import Notice from './components/Notice'
import { Container, Panel, PanelContent } from './styles'


const Dashboard: React.FC = () => {

  return (
    <Container>
      <Navbar showLogin={false}/>
      <Panel>
        <PanelContent>
          <Certificates />
        </PanelContent>
      </Panel>
      <Panel>
        <PanelContent>
          <Notice />
        </PanelContent>
      </Panel>
      <Panel>
        <PanelContent>
          <Event />
        </PanelContent>
      </Panel>
    </Container>
  )
}

export default Dashboard
