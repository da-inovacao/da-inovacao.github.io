import React from 'react';

// import { Container } from './styles';

const Certificates: React.FC = () => {
  const certificates = [
    { title: 'Encontro dos Estudantes de Matemática', href: 'https://drive.google.com/drive/folders/1d5MjXM4b67VqpYsyX9RcQ_XaPxS_2qVh?usp=sharing' },
    { title: 'Ciclo de Palestras', href: 'https://drive.google.com/drive/folders/12XhuyGR1B9nT422gWEaVYZxZgnU84zry?usp=sharing' },
  ]

  return (
    <div className="card-body">
      {certificates.map(certificate => (
        <div className="link-primary mb-3">
          <a className="link-primary" style={{ textDecoration: 'none' }} target="_blank" rel='noreferrer' href={certificate.href}>{certificate.title}</a>
        </div>
      ))}
    </div >
  )
}

export default Certificates;