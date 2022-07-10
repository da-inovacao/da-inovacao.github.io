import React, { useCallback, useEffect, useState } from 'react'
import { faEdit, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

import {
  Container,
  Button,
  Col,
  NoticeContainer,
  ContainerButton,
  DateText,
  Title,
  InsertContainer,
  Input,
  Label,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '~/services/Api'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotice, setNotices } from '~/reducers'
import { RootState } from '~/store'

Modal.setAppElement('body')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 4000,
  },
}

const Notice: React.FC = () => {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const alert = useAlert()
  const notices = useSelector<RootState, _Notices[]>(({ mainState }) => mainState.notices)
  const dispatch = useDispatch()

  const handleRemove = async (notice: _Notices) => {
    const { data, status } = await api.delete(`/notices/${notice.id}`, { withCredentials: true })

    if (status.toString().startsWith('2')) {
      dispatch(removeNotice(notice))
      alert.success('Notícia removida')
    } else {
      alert.error(data.message)
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)

    return date.toLocaleString('pt-BR', { dateStyle: 'medium' })
  }

  const handleInsertNotice = async () => {
    const { data, status } = await api.post(
      '/notices',
      { title, href: link },
      { withCredentials: true }
    )

    if (status.toString().startsWith('2')) {
      dispatch(setNotices([data, ...notices]))
      alert.success('Notícia criada')
    }
  }

  const handleExit = () => setModalOpen(false)

  useEffect(() => {
    const fetchNotices = async () => {
      const { data } = await api.get('/notices')

      dispatch(setNotices(data))
    }
    fetchNotices()
  }, [])

  return (
    <Container>
      <button onClick={() => setModalOpen(true)}>+</button>
      {notices.map((notice) => (
        <NoticeContainer key={notice.id}>
          <Col>
            <Title>{notice.title}</Title>
            <DateText>{formatDate(notice.created_at)}</DateText>
          </Col>
          <ContainerButton>
            <Button onClick={() => handleRemove(notice)}>
              <FontAwesomeIcon icon={faRemove} color='#f00' />
            </Button>
          </ContainerButton>
        </NoticeContainer>
      ))}
      <Modal isOpen={modalOpen} style={customStyles} onRequestClose={handleExit}>
        <InsertContainer>
          <Label>Título</Label>
          <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label>Link</Label>
          <Input type='text' value={link} onChange={(e) => setLink(e.target.value)} />
          <Button onClick={handleInsertNotice}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InsertContainer>
      </Modal>
    </Container>
  )
}

export default Notice
