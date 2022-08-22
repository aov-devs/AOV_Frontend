import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import Layout from 'src/components/Layout';
import AnimatedLogo from 'src/components/AnimatedLogo';

import './style.scss';

const HomePage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Layout title="Home" styles={{ backgroundColor: '#26304b' }}>
        <div className="animated-logo-container">
          {' '}
          <AnimatedLogo />
        </div>
        <Particles id="tsparticles" url="/particlesjs-config.json" init={particlesInit} loaded={particlesLoaded} />
      </Layout>
    </div>
  );
};
export default HomePage;
