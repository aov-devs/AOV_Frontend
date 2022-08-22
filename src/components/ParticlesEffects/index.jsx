import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './style.scss';

export const LinksParticles = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Particles
        options={{
          particles: {
            number: {
              value: 100
            },
            color: {
              value: '#89bed3',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 2,
                color: '#4f77c0',
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0,
                sync: true,
              },
            },
       
          },
        }}
      />
      <Particles
        id="links-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            color: {
              value: '#cfe2ee',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 3,
                color: '#4f77c0',
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#0088c7',
              opacity: 0.7,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
