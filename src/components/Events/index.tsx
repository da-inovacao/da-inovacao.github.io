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
    <div className="card-body">
      {renderEvents()}
      <Modal show={modalIsVisible} on size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton onHide={() => setModalVisible(false)}>
          <Modal.Title id="contained-modal-title-vcenter">{modalContent?.title}</Modal.Title>
        </Modal.Header>
        <div className="col">
          <div className="row">
            <img className='fluid' src={modalContent?.banner} alt="" />
          </div>
        </div>
        <Modal.Body>{modalContent?.body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalVisible(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Events;