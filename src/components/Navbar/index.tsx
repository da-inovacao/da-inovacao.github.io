import { faPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'

import api from 'services/Api'

import logo from '../../assets/images/logo.svg'

type _Navbar = {
  showLogin?: boolean
  showAddUser?: boolean
}

const Navbar: React.FC<_Navbar> = ({ showLogin = true, showAddUser = false }) => {
  // const passwords = [
  //   { href: '#odiretorio', title: 'Diretório' },
  //   { href: '#noticias', title: 'Notícias' },
  //   { href: '#contato', title: 'Contato' },
  // ]
  const alert = useAlert()

  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const handleAddUser = async () => {
    const { status } = await api.post('/users', { login, password })

    if (status.toString().startsWith('2')) {
      alert.success('Usuário criado')
    }
  }

  return (
    <header className='header fixed-top'>
      <div className='branding docs-branding row'>
        <div className='container-fluid position-relative'>
          <div className='docs-logo-wrapper'>
            <div className='site-logo'>
              <a className='navbar-brand' href='index.html'>
                <img className='logo-icon me-2' src={logo} alt='logo' />
                <span className='logo-text'>
                  <span className='text-alt'>
                    Inov<span className='logo-text'>Ação</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className='docs-top-utilities h-100 pb-3 d-flex align-items-center px-2'>
            {showLogin && (
              <Link className='text-decoration-none' to={'/login'}>
                <FontAwesomeIcon icon={faUser} className='mx-2' />
                Login
              </Link>
            )}
            {showAddUser && (
              <button className='sm-btn btn-outline-secondary btn' onClick={() => setModalOpen(true)}>
                <FontAwesomeIcon icon={faUserPlus} className='mx-2' />
                novo usuário
              </button>
            )}
            {/* <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-fw" /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-twitter fa-fw" /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-slack fa-fw" /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-product-hunt fa-fw" /></a></li>
            </ul>
            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/" className="btn btn-primary d-none d-lg-flex">Download</a> */}
          </div>
        </div>
        <ReactModal isOpen={modalOpen} style={customStyles} onRequestClose={() => setModalOpen(false)}>
          <div className='d-flex row'>
            <label>Usuário</label>
            <input type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
            <label>Senha</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn sm-btn btn-outline-secondary mt-5' onClick={handleAddUser}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </ReactModal>
      </div>
    </header>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 4000,
  },
}

export default Navbar
