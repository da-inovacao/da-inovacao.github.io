import React from 'react'
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'

import { Button, Col, Container, ContainerButton, DateText, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '~/services/Api'
import { useAlert } from 'react-alert'

const Notice: React.FC<Props> = ({ notice }) => {
  const alert = useAlert()

  const handleRemove = async () => {
    const { data, status } = await api.delete(`/notices/${notice.id}`, { withCredentials: true })

    if (status.toString().startsWith('2')) {
      alert.success('Notícia removida')
    } else {
      alert.error(data.message)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)

    return date.toLocaleString('pt-BR', { dateStyle: 'medium' })
  }

  return (
    <Container>
      <Col>
        <Title>{notice.title}</Title>
        <DateText>{formatDate(notice.created_at)}</DateText>
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
