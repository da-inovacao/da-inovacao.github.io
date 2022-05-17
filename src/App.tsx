import React from 'react';
import { faCalendar, faHeart, faNewspaper, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './components/Navbar';
import Events from './components/Events';
import Notices from './components/Notices';
// import Directorate from './components/Directorate';
// import Notices from './components/Notices';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ4I0zbZHQw8nQfE9kLucGrEkbGRhokVA",
  authDomain: "siteda-c1a68.firebaseapp.com",
  projectId: "siteda-c1a68",
  storageBucket: "siteda-c1a68.appspot.com",
  messagingSenderId: "720717782640",
  appId: "1:720717782640:web:eadd3a9cae470388af1eb5",
  measurementId: "G-QEQYRB2GBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className='w-100 h-100'>
      <Navbar />
      < div className="page-header theme-bg-dark py-5 text-center position-relative" >
        <div className="theme-bg-shapes-right"></div>
        <div className="theme-bg-shapes-left"></div>
        <div className="container">
          <h1 className="page-heading single-col-max mx-auto">DA InovAção</h1>
          <div className="page-intro single-col-max mx-auto">Diretório Acadêmico do curso de Lic. em Matemática da UFRPE</div>
          {/* <div className="main-search-box pt-3 d-block mx-auto">
            <form className="search-form w-100">
              <input type="text" placeholder="Search the docs..." name="search" className="form-control search-input" />
              <button type="submit" className="btn search-btn" value="Search"><FontAwesomeIcon icon={faGithub} className="fas fa-search" /></button>
            </form>
          </div> */}
        </div>
      </div >
      < div className="page-content" >
        <div className="container">
          <div className="docs-overview py-5">
            <div className="row justify-content-center h-100">
              {/* <div className="col justify-content-center align-items-center text-center h-100">
                Ainda em desenvolvimento, acesso o site antigo <a href='https://damatematicaufrpe.wixsite.com/damatufrpe' target='_blank' rel='noreferrer' className="link">aqui</a>
              </div> */}
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faUserGraduate} />
                      </span>
                      <span className="card-title-text">O Diretório</span>
                    </h5>
                    <div className="card-text text-justify">
                      O Diretório Acadêmico da Licenciatura em Matemática - chapa InovAção, o terceiro na história recente do curso conta com a participação efetiva de 11 estudantes do curso, dá suporte à comunidade matemática da UFRPE. O Diretório Acadêmico é a ponte entre a coordenação do curso e dos alunos, e temos como principal função um trabalho comunicativo e integrador, no qual o diálogo é a principal fonte para solucionar problemas.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-1"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      <span className="card-title-text">Eventos</span>
                    </h5>
                    <Events />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faNewspaper} className="fas fa-box fa-fw" />
                      </span>
                      <span className="card-title-text">Notícias</span>
                    </h5>
                    <Notices />
                  </div>
                </div>
              </div>
              {/*<div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faGithub} className="fas fa-cogs fa-fw" />
                      </span>
                      <span className="card-title-text">Integrations</span>
                    </h5>
                    <div className="card-text">
                      Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-4"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faGithub} className="fas fa-tools" />
                      </span>
                      <span className="card-title-text">Utilities</span>
                    </h5>
                    <div className="card-text">
                      Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-5"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faGithub} className="fas fa-laptop-code" />
                      </span>
                      <span className="card-title-text">Web</span>
                    </h5>
                    <div className="card-text">
                      Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-6"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faGithub} className="fas fa-tablet-alt" />
                      </span>
                      <span className="card-title-text">Mobile</span>
                    </h5>
                    <div className="card-text">
                      Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-7"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faGithub} className="fas fa-book-reader" />
                      </span>
                      <span className="card-title-text">Resources</span>
                    </h5>
                    <div className="card-text">
                      Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-8"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 py-3">
                  <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      <span className="theme-icon-holder card-icon-holder me-2">
                        <FontAwesomeIcon icon={faGithub} className="fas fa-lightbulb" />
                      </span>
                      <span className="card-title-text">FAQs</span>
                    </h5>
                    <div className="card-text">
                      Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    </div>
                    <a className="card-link-mask" href="docs-page.html#section-9"></a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div >
      <footer className="footer">
        <div id='#section-contact' className="footer-bottom text-center py-5">
          <div className="d-flex flex-column">
            <span className='my-2'>Contatos</span>
            <a href="mailto:damatematicaufrpe@gmail.com" className="email">damatematicaufrpe@gmail.com</a>
          </div>
          <ul className="social-list list-unstyled pb-4 mb-0 mt-2">
            {/* <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithub} className="fab fa-fw" /></a></li> */}
            {/* <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} className="fab fa-fw" /></a></li> */}
            {/* <li className="list-inline-item"><a href="mailto:damatematicaufrpe@gmail.com" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} className="fab fa-fw" /></a></li> */}
            {/* <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faProductHunt} className="fab fa-fa-fw" /></a></li> */}
            <li className="list-inline-item"><a href="https://www.facebook.com/da.matematicaufrpe" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebook} className="fab fa-fa-fw" /></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/damatematica.ufrpe/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} className="fab fa-fw" /></a></li>
          </ul>
          <small className="copyright px-2">Designed with<FontAwesomeIcon className='mx-2' icon={faHeart} style={{ color: '#fb866a' }} />by <a className="theme-link" href="http://themes.3rdwavemedia.com" target="_blank" rel='noreferrer'>Xiaoying Riley</a> for developers</small>
        </div>
      </footer>
    </div>
  )
  // return (
  //   <Container className='w-100 mw-100 p-0 m-0' >
  //     <Navbar />
  //     <Row sm={1} md={2} className='w-100 py-4'>
  //       <Col lg={9}>
  //         <Container className='w-100 mw-100 d-flex flex-column p-2'>
  //           <Directorate />
  //           <span>Contato</span>
  //         </Container>
  //       </Col>
  //       <Col lg={3}>
  //         <Container className='w-100 p-0 m-0'>
  //           <Notices />
  //         </Container>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
}

export default App;
