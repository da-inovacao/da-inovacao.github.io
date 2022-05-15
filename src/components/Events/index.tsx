import React from 'react';

// import { Container } from './styles';

const Events: React.FC = () => {
  const events = [
    { href:'#1', title: 'IV Encontro dos Estudantes de Matemática', day: '18', month: 'Mar' },
    { href:'#2', title: 'III Encontro dos Estudantes de Matemática', day: '2', month: 'Abr' },
  ]

  return (
    <div className="card-body">
      {events.map(e => (
        <div className='card event mb-4'>
          <div className="row">
            <div className='col-2 bg-info align-middle rounded-start text-light py-2'>
              <span className="row justify-content-center font-weight-bold">{e.day}</span>
              <span className="row justify-content-center card-text">{e.month}</span>
            </div>
            <div className='col p-2 link-primary'>{e.title}</div>
          </div>
          <a className="card-link-mask" href={e.href}></a>
        </div>
      ))}
    </div>
  )
}

export default Events;