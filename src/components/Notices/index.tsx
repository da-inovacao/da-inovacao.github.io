import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotices } from '~/reducers'

import api from '~/services/Api'
import { RootState } from '~/store'

const Notices: React.FC = () => {
  const notices = useSelector<RootState, _Notices[]>(({ mainState }) => mainState.notices)
  const dispatch = useDispatch()

  useEffect(() => {
    const getNotices = async () => {
      const { data } = await api.get('/notices')
      dispatch(setNotices(data))
    }

    getNotices()
  }, [])

  return (
    <>
      <div className='card-body'>
        {notices.map((notice: any, i: number) => (
          <div className='card notice py-2 px-3 border-0 border-bottom mb-2' key={i}>
            <div className='row'>
              <span className='link-primary'>{notice.title}</span>
              <a className='card-link-mask' target='_blank' rel='noreferrer' href={notice.href}></a>
            </div>
            <div className='row'>
              <span className='text-muted small'>{notice.date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notices
