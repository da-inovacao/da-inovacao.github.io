import React from 'react';

// import { Container } from './styles';

const Certificates: React.FC = () => {
  const certificates = [
    { title: 'Encontro dos Estudantes de Matemática', href: 'https://drive.google.com/drive/u/4/folders/1m2fRvWnwB-hWKl0XhyYiMzmrfcqnH-Q4' },
    { title: 'Ciclo de Palestras', href: 'https://drive.google.com/drive/u/4/folders/1m2fRvWnwB-hWKl0XhyYiMzmrfcqnH-Q4' },
  ]

  return (
    <div className="card-body">
      {certificates.map(certificate => (
        <div className="link-primary mb-3">{certificate.title}
          <a className="card-link-mask" target="_blank" rel='noreferrer' href={certificate.href} />
        </div>
      ))}
    </div >
  )
}

export default Certificates;