import React, { useCallback, useEffect, useState } from 'react';

import api from '~/services/Api';

const Events: React.FC = () => {
  const [events, setEvents] = useState<any>([])

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await api.get('/events.json')
      setEvents(Object.values(data))
    }

    getEvents()
  }, [])

  const renderEvents = useCallback(() => {
    if (events !== null && events.length > 0) {
      return (events.map((e: any) => (
        <div className='card event mb-4'>
          <div className="row">
            <div className='col-2 bg-info rounded-start text-light py-2'>
              <div className="row text-center">
                <span className="font-weight-bold">{e.day}</span>
                <span className="card-text small align-items-center">{e.month} {e.year}</span>
              </div>
            </div>
            <div className='col p-2'>
              <span className="link-primary">{e.title}</span>
            </div>
          </div>
          <a className="card-link-mask" href={e.href}></a>
        </div>
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
    </div>
  )
}

export default Events;