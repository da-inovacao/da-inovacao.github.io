import React from 'react'
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'

import { Button, Col, Container, ContainerButton, DateText, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '~/services/Api'

const Notice: React.FC<Props> = ({ notice }) => {
  const handleRemove = async () => {
    const { status } = await api.delete(`/notices/${notice.id}`, { withCredentials: true })

    if (status.toString().startsWith('2')) {
      console.log('ceerto')
    } else {
      console.log('erro')
    }
  }

  return (
    <Container>
      <Col>
        <Title>{notice.title}</Title>
        <DateText>{String(notice.date)}</DateText>
      </Col>
      <ContainerButton>
        <Button onClick={handleRemove}>
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
