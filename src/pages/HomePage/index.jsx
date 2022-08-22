import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Layout from 'src/components/Layout';
import AnimatedLogo from 'src/components/AnimatedLogo';
import { LinksParticles } from 'src/components/ParticlesEffects';

import './style.scss';

const HomePage = () => {
  return (
    <div>
      <Layout
        title="Home"
        styles={{
          background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,25,78,1) 43%, rgba(0,54,139,1) 100%)'
        }}
      >
        <div style={{ position: 'relative' }}>
          <LinksParticles />
          <div className="home-page">
            <div className="home-page__container">
              <div className="animated-logo-container">
                {' '}
                <AnimatedLogo />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default HomePage;
