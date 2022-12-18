import React, { useEffect, useState } from 'react';
import './Home.scss';
import { FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import AnimationLetters from './animations';
import tailwind from './assets/tailwind.png';
import Logo1 from './assets/logo/logo1.png';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [letterClass, setletterClass] = useState('text-animate');
  const nameArray = ['I', 'L', 'L', 'B', 'O', 'A', 'H'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

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
        <div className="home">
          <div className="home-content">
            <div className="description">
              <div className="description_me">
                <h3>
                  <span className={`${letterClass}`}>H</span>
                  <span className={`${letterClass} _12`}>i, </span>
                  <span className={`${letterClass} _13`}> </span>
                  <span className={`${letterClass} _14`}> I&rsquo;</span>
                  <span className={`${letterClass} _15`}>m</span>
                </h3>
                <h1 className="name">
                  <span className="name-logo">
                    <img src={Logo1} alt="" />
                  </span>
                  <span>
                    <AnimationLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                  </span>
                </h1>
                <h1 className="job">
                  <AnimationLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <p>Frontend developer / JavaScript Expert / React developer.</p>
              </div>
            </div>

            <div className="home-tools">
              <div className="icon_animation">
                <div className="spin1">
                  <FaCss3 size={100} color="lightblue" />
                </div>
                <div className="spin2">
                  <FaHtml5 size={100} color="red" />
                </div>
                <div className="spin3">
                  <FaReact size={100} color="lightblue" />
                </div>
                <div className="spin4">
                  <FaJs size={100} color="yellow" />
                </div>
                <div className="spin5">
                  <FaGitAlt size={100} color="orange" />
                </div>
                <div className="spin6">
                  <img src={tailwind} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
