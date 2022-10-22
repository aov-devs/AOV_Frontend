import React from 'react';
import Page from 'src/components/Page';
import AnimatedLogo from 'src/components/AnimatedLogo';
import { LinksParticles } from 'src/components/ParticlesEffects';

import './style.scss';

const HomePage = () => {
  return (
    <Page title="Home">
      <div style={{ position: 'relative' }}>
        <div className="home-page__bg"/>
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
    </Page>
  );
};
export default HomePage;
