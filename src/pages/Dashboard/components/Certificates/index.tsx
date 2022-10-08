import React, { useCallback, useEffect, useState } from 'react'
import { faEdit, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

import {
  Container,
  Button,
  Col,
  CertificatesContainer,
  ContainerButton,
  DateText,
  Title,
  InsertContainer,
  Input,
  Label,
  AddButton,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '~/services/Api'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { setCertificates } from '~/reducers'
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

const Certificates: React.FC = () => {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const alert = useAlert()
  const certificates = useSelector<RootState, _Certificates[]>(({ mainState }) => mainState.certificates)
  const dispatch = useDispatch()

  const handleRemove = async (Certificates: _Certificates) => {
    // const { data, status } = await api.delete(`/Certificates/${Certificates.id}`)
    // if (status.toString().startsWith('2')) {
    //   dispatch(removeCertificates(Certificates))
    //   alert.success('Notícia removida')
    // } else {
    //   alert.error(data.message)
    // }
  }

  const handleInsertCertificates = async () => {
    const { data, status } = await api.post('/certificates', { title, href: link })

    if (status.toString().startsWith('2')) {
      dispatch(setCertificates([data, ...certificates]))
      alert.success('Certificado criado')
    }
  }

  const handleExit = () => setModalOpen(false)

  useEffect(() => {
    const fetchCertificates = async () => {
      const { data } = await api.get('/certificates')

      dispatch(setCertificates(data))
    }
    fetchCertificates()
  }, [])

  return (
    <Container>
      <div className='d-flex align-items-center col mb-2'>
        <span className='text-primary flex-grow-1'>Links</span>
        <AddButton className='btn-primary' onClick={() => setModalOpen(true)}>
          +
        </AddButton>
      </div>
      {certificates.map((certificate) => (
        <CertificatesContainer>
          <Col>
            <Title>{certificate.title}</Title>
          </Col>
          <ContainerButton>
            <Button onClick={() => {}}>
              <FontAwesomeIcon icon={faRemove} color='#f00' />
            </Button>
          </ContainerButton>
        </CertificatesContainer>
      ))}
      <Modal isOpen={modalOpen} style={customStyles} onRequestClose={handleExit}>
        <InsertContainer>
          <Label>Título</Label>
          <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label>Link</Label>
          <Input type='text' value={link} onChange={(e) => setLink(e.target.value)} />
          <Button onClick={handleInsertCertificates}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InsertContainer>
      </Modal>
    </Container>
  )
}

export default Certificates
