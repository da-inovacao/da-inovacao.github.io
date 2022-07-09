import React from 'react';

import logo from '~/assets/images/logo.svg'

const Login: React.FC = () => {
  return (
    <div className="page-content">
      <div className="col d-flex justify-content-center align-center">
        <form className='col-9 col-md-3 center' action="">
          <div className="row mb-4">
            <div className="col">
              <img className="logo-icon me-2" src={logo} alt="logo" />
              <span className="logo-text"><span className="text-alt">Inov<span className='logo-text'>Ação</span></span></span>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className='form-control' id='inputEmail' />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="inputPassword">Senha</label>
            <input type="password" className='form-control' id='inputPassword' />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className='btn btn-primary'>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;