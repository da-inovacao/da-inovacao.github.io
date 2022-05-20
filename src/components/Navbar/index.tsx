import React from 'react';

import logo from '../../assets/images/logo.svg'

const Navbar: React.FC = () => {
  // const links = [
  //   { href: '#odiretorio', title: 'Diretório' },
  //   { href: '#noticias', title: 'Notícias' },
  //   { href: '#contato', title: 'Contato' },
  // ]

  return (
    <header className="header fixed-top">
      <div className="branding docs-branding">
        <div className="container-fluid position-relative py-2">
          <div className="docs-logo-wrapper">
            <div className="site-logo">
              <a className="navbar-brand" href="index.html">
                <img className="logo-icon me-2" src={logo} alt="logo" />
                <span className="logo-text"><span className="text-alt">Inov<span className='logo-text'>Ação</span></span></span>
              </a>
            </div>
          </div>
          <div className="docs-top-utilities d-flex justify-content-end align-items-center">

            {/* <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-fw" /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-twitter fa-fw" /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-slack fa-fw" /></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-product-hunt fa-fw" /></a></li>
            </ul>
            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/" className="btn btn-primary d-none d-lg-flex">Download</a> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;