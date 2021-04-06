import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: false,
              value_area: 552.4120678362015
            }
          },
          color: {
            value: "#dadae3"
          },
          shape: {
            type: "triangle",
            stroke: {
              width: 1,
              color: "#001212"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.05524120678362015,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 63.13280775270874,
            random: true,
            anim: {
              enable: false,
              speed: 26.371940255568067,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 78.91600969088593,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6.313280775270874,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 631.3280775270874,
              rotateY: 710.2440872179734
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 223.76191731997147,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default Particle;
