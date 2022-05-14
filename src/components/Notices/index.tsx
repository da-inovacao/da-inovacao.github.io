import React from 'react';
import { Carousel, Container, Card, Image, CardGroup } from 'react-bootstrap'

const Notices: React.FC = () => {
  return (
    <CardGroup className='d-flex flex-column p-2 m-0'>
      <Card>
        <Card.Header>Eventos</Card.Header>
        <Container className='my-3'>
          <Card.Link>IV Encontro dos Estudantes de Mateática</Card.Link>
        </Container>
        <Container className='my-3'>
          <Card.Link>III Encontro dos Estudantes de Mateática</Card.Link>
        </Container>
      </Card>
    </CardGroup>
  )
}

export default Notices;