import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCertificates } from '~/reducers';
import api from '~/services/Api';
import { RootState } from '~/store';

// import { Container } from './styles';

const Certificates: React.FC = () => {

  const dispatch = useDispatch()

  const certificates = useSelector<RootState, _Certificates[]>(({ mainState }) => mainState.certificates)

  // const certificates = [
  //   { title: 'Encontro dos Estudantes de Matemática', href: 'https://drive.google.com/drive/folders/1d5MjXM4b67VqpYsyX9RcQ_XaPxS_2qVh?usp=sharing' },
  //   { title: 'Ciclo de Palestras', href: 'https://drive.google.com/drive/folders/12XhuyGR1B9nT422gWEaVYZxZgnU84zry?usp=sharing' },
  //   { title: 'Recepção', href: 'https://drive.google.com/drive/folders/13fAuaQ8cIRccZd75IjkKZ0-TMPteAz9M?usp=sharing' },
  // ]

  useEffect(()=>{
    const fetchCertificates = async () => {
      const { data } = await api.get('/certificates')

      dispatch(setCertificates(data))
    }
    fetchCertificates()
  },[])

  return (
    <div className="card-body">
      {certificates.map(certificate => (
        <div className="link-primary mb-3" key={certificate.title}>
          <a className="link-primary" style={{ textDecoration: 'none' }} target="_blank" rel='noreferrer' href={certificate.href}>{certificate.title}</a>
        </div>
      ))}
    </div >
  )
}

export default Certificates;