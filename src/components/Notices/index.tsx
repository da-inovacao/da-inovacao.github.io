import React, { useEffect, useState } from 'react';

import api from '~/services/Api'

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<any>([])

  useEffect(() => {
    const getNotices = async () => {
      const { data } = await api.get('/notices.json')
      setNotices(Object.values(data))
    }

    getNotices()
  }, [])

  return (
    <>
      <div className="card-body">
        {
          notices.map((notice: any, i: number) => (
            <div className="card notice py-2 px-3 border-0 border-bottom mb-2" key={i}>
              <div className="row">
                <span className='link-primary'>{notice.title}</span>
                <a className="card-link-mask" target='_blank' rel='noreferrer' href={notice.href}></a>
              </div>
              <div className="row">
                <span className="text-muted small">{notice.date}</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Notices;