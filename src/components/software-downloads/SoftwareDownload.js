import React from "react";
// import {FaWallet} from 'react-icons/fa';
import {FaCheckCircle} from 'react-icons/fa';

const SoftwareDownload = () => {
  return (
    <section
      className="dg__software__area dg__software--2 section-padding--xl"
      style={{
        // backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg/5.jpg"})`,
        backgroundColor: '#e9edf0',
        overflow: 'hidden',
        backgroundRepeat: `no-repeat`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="dg__software__inner">
              <h2 style={{color: '#000'}}>Download Software, Compatible For All Devices</h2>              
              <ul className="software__features">
                <li><FaCheckCircle style={{color: 'green'}} /> &nbsp; Cryptocurrency exchange</li>
                <li><FaCheckCircle style={{color: 'green'}} /> &nbsp; Multicurrency accounts</li>
                <li><FaCheckCircle style={{color: 'green'}} /> &nbsp; Instant payments and transfers</li>
                <li><FaCheckCircle style={{color: 'green'}} /> &nbsp; No need to enter a password</li>
              </ul>              
              <ul className="available__device">
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/4.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/5.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/6.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL + "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/7.png"}
                      alt="images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
          <img 
            src={process.env.PUBLIC_URL + "/images/software/some@2x.png"}
            className="mobile__bg"
            alt="device1"
          />
          <img 
            src={process.env.PUBLIC_URL + "/images/software/some2@2x.png"}
            style={{
              position: `absolute`,
              top: 0,
              left: 360,
              width: 300,
              willChange: 'transform'
              }}
            alt="device2"
          />
          </div>        
        </div>
      </div>
    </section>
  );
};

export default SoftwareDownload;
