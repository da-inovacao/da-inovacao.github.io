import React from 'react'
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'

import { Button, Col, Container, ContainerButton, DateText, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Notice: React.FC<Props> = ({ notice }) => {
  return (
    <Container>
      <Col>
        <Title>{notice.title}</Title>
        <DateText>{String(notice.date)}</DateText>
      </Col>
      <ContainerButton>
        <Button onClick={() => {}}>
          <FontAwesomeIcon icon={faRemove} color='#f00' />
        </Button>
      </ContainerButton>
    </Container>
  )
}

export default Notice

interface Props {
  notice: _Notices
}
