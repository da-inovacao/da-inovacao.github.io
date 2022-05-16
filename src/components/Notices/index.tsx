import React from 'react';

const Notices: React.FC = () => {
  const notices = [
    { href: '#1', title: 'Volta as aulas 2020.1', date: '12/12/9999' },
    { href: '#2', title: 'Volta as aulas 2022.1', date: '12/12/9999' },
    { href: '#3', title: 'Escorpião e Cobra Coral são encontrados frequentemente no CEGEN', date: '12/12/9999' },
  ]

  return (
    <div className="card-body">
      {
        notices.map(notice => (
          <div className="card notice py-2 px-3 border-0 border-bottom mb-2">
            <div className="row">
              <span className='link-primary'>{notice.title}</span>
              <a className="card-link-mask" href={notice.href}></a>
            </div>
            <div className="row">
              <span className="text-muted small">{notice.date}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Notices;