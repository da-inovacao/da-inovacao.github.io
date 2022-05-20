import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import api from '~/services/Api';

const Events: React.FC = () => {
  const [events, setEvents] = useState<TEvent[]>()
  const [modalIsVisible, setModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState<TEvent>()

  const handleClick = (event: TEvent) => {
    setModalContent(event)
    setModalVisible(true)
  }

  const getDay = (date: string) => new Date(date).getDate()
  const getMonth = (date: string) => new Date(date).toLocaleString('pt-BR', { month: 'short' })
  const getYear = (date: string) => new Date(date).getFullYear()

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await api.get('/events.json')
      setEvents(Object.values(data))
    }

    getEvents()
  }, [])

  const renderEvents = useCallback(() => {
    if (events !== undefined && events.length > 0) {
      return (events.map((e, i) => (
        <div className='card event mb-4' key={i}>
          <div className="row">
            <div className='col-2 bg-info rounded-start text-light py-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="row text-center">
                <span className="small">Dia</span>
                <span className="font-weight-bold small">{getDay(e.date)}</span>
              </div>
            </div>
            <div className='col p-2'>
              <div className="row"><span className="link-primary">{e.title}</span></div>
              <div className="row"><span className="card-text small align-items-center">{getMonth(e.date)} {getYear(e.date)}</span></div>
            </div>
          </div>
          <a className="card-link-mask" onClick={() => handleClick(e)}></a>
        </div >
      )))
    } else {
      return (
        <div className="col d-flex justify-content-center align-items-center">
          <span className="text-muted center">Sem eventos, por enquanto</span>
        </div>
      )
    }
  }, [events])

  return (
    <div className="card-body doc-overview">
      {renderEvents()}
      <Modal show={modalIsVisible} on size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton onHide={() => setModalVisible(false)}>
          <Modal.Title id="contained-modal-title-vcenter" className="text-primary">{modalContent?.title}</Modal.Title>
        </Modal.Header>
        <div className="col">
          <div className="row">
            <img className='fluid' src={modalContent?.banner} alt="" />
          </div>
        </div>
        <Modal.Body>
          <div className="card-text m-lg-2">{modalContent?.text}</div>
          <div className="p-lg-4 pt-2">
            <span className="h5 text-primary">Apresentações</span>
            <div className='mt-4'>
              {modalContent?.presentations.map(({ title, banner, date, abstract, local }) => (
                <div className="card mb-4">
                  <div className="card-header border-0 d-col">
                    <span className="card-title-text h6 text-primary">{title}</span>
                    <span className="text-primary">{new Date(date).toLocaleString('pt-BR')}</span>
                    <span>Local: {local}</span>
                  </div>
                  <div className="card-body container row">
                    <span className="card-text col text-right">{abstract}</span>
                    <span className="card-text col-lg-5">
                      <img src={banner} alt="" className="img-fluid" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalVisible(false)}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Events;