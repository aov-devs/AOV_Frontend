import React, { useState, useEffect } from 'react';
import { LoginForm,RegisterForm } from 'src/components/Forms';
import Layout from 'src/components/Layout';
import { useLogin } from 'src/api/auth';
import BeastImg from 'src/assets/beast.jpg';
import './style.scss';
import { useLocation } from 'react-router-dom';

const LoginRegisterPage = () => {
  const location = useLocation();
  const [bookPage, setBookPage] = useState('');
  const login = useLogin();
  useEffect(() => {
    if (location.pathname == '/register') setBookPage('next-page');
    else if (location.pathname == '/login') setBookPage('');
  }, [location]);

  return (
    <Layout title={location.pathname.substr(1)}>
      <div className="book-container">
        <div className="book">
          <label htmlFor="page-1" className="book__page">
            <DidYouKnowBox />
          </label>

          <label htmlFor="page-2" className="book__page book__page--4">
            <div className="page__content"><RegisterForm/></div>
          </label>

          <div className={`book__page book__page--2 ${bookPage}`}>
            <div className="book__page-front">
              <div className="page__content">
                <LoginForm />
              </div>
            </div>
            <div className="book__page-back">
              <div className="page__content">page 3</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginRegisterPage;

const DidYouKnowBox = () => {
  return (
    <div className="did-you-know">
      <div className="image-container">
        <img className="image" src={BeastImg} alt="Beast of gevaudan" />
      </div>
      <p className="title">
        <span style={{ color: 'blue' }}>Did you know </span>
        Beast of gevaudan is a real-life mystery?
      </p>
      <p className="description">
        {' '}
        The tale of the Beast of Gévaudan began in the 18th century, with a girl who had been born and raised in
        Gévaudan as a hidden Vampire, and one day, the village priest discovered her secret. He was deaf to every
        explanation and excuse, and just before his knife ran her through, she screamed, impulsively "if you kill me...
        I swear my companions will come to kill you." The desperate false threat was what sparked the rumors of the
        Beast.[3]
      </p>
    </div>
  );
};
