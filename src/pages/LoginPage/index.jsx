import React, { useState } from 'react';
import Layout from 'src/components/Layout';
import BeastImg from 'src/assets/beast.jpg'
import './style.scss';

const LoginPage = () => {

  const [page, setPage] = useState();
  return (
    <div>
      <Layout title="Login">
        <div className="login-form">
          <div className="book-container">
            <div className="book">
              <label for="page-1" className="book__page">
                <div className="did-you-know">
                  <div className="image-container">
                    <img className="image" src={BeastImg} alt="Beast of gevaudan" />
                  </div>
                  <p className="title">
                    <span style={{ color: 'blue' }}>
                      Did you know {' '}
                    </span>
                    Beast of gevaudan is a real-life mystery?
                  </p>
                  <p className="description"> The tale of the Beast of Gévaudan began in the 18th century, with a girl who had been born and raised in Gévaudan as a hidden Vampire, and one day, the village priest discovered her secret. He was deaf to every explanation and excuse, and just before his knife ran her through, she screamed, impulsively "if you kill me... I swear my companions will come to kill you." The desperate false threat was what sparked the rumors of the Beast.[3]</p>
                </div>
              </label>

              <label for="page-2" className="book__page book__page--4">
                <div className="page__content">
                  page 4
                </div>
              </label>

              <div className={`book__page book__page--2 ${page ? `${page}-page` : ''}`}>
                <div className="book__page-front">
                  <div className="page__content">
                    <form action="#" className="log-in-container" >
                      <h1 className="title">Login</h1>
                      <input autoComplete="off" type="email" placeholder="Email" />
                      <input autoComplete="off" type="password" placeholder="Password" />
                      <a href="#">Forgot your password?</a>
                      <button>Log In</button>
                      <div className="register-btn">
                        Not a member? <a href="#" onClick={() => setPage('next')}> Register Now </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="book__page-back">
                  <div className="page__content">
                    page 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div >);
};

export default LoginPage;
