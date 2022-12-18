import React, { useEffect, useState } from 'react';
import './About.scss';
import profile from './assets/profile.jpeg';
import Logo1 from './assets/logo/logo1.png';

const About = () => {
  const [letterClass, setletterClass] = useState('text-animate');

  useEffect(() => {
    let time = setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 4000);
    return () => {
      clearInterval(time);
    };
  });

  return (
    <div className="body">
      <div className="container">
        <img src={Logo1} alt="" className="background-logo" />
        <div className="about">
          <div className="about-content">
            <div>
              <h2 className="text-center">
                <span className={`${letterClass}`}>A</span>
                <span className={`${letterClass} _12`}>b </span>
                <span className={`${letterClass} _13`}> o</span>
                <span className={`${letterClass} _14`}>u</span>
                <span className={`${letterClass} _15`}>t</span>
              </h2>
            </div>
            <div className="about-profile">
              <img src={profile} alt="profile pic" />
              <p>
                I am Yeboah william. I am a front-end developer that focuses on Web Design and
                modern JavaScript, and React as a framework. I have a passion for Design System, Web
                Accessibility and Serverless Technologies. Ready to help team achieve company goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
