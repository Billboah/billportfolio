import React, { useEffect, useState } from 'react';
import './Works.scss';
import amazon from './assets/work/amazon.jpeg';
import beatbox from './assets/work/beatbox.png';
import clock from './assets/work/clock.png';
import myclock from './assets/work/myclock.png';
import uber from './assets/work/uber.png';
import weather from './assets/work/weather.png';
import Logo1 from './assets/logo/logo1.png';

const Works = () => {
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
        <div className="work1">
          <h2 className="text-center">
            <span className={`${letterClass}`}>W</span>
            <span className={`${letterClass} _12`}>o </span>
            <span className={`${letterClass} _13`}> r</span>
            <span className={`${letterClass} _14`}>k</span>
            <span className={`${letterClass} _15`}>s</span>
          </h2>

          <div className="work-container">
            <div className="works">
              <a href="https://uber-next-clone-app.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${uber})` }}>
                  <div className="code-link">
                    <a
                      href="https://uber-next-clone-app.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://www.github.com/billboah/uber-next-clone-app"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>UBER CLONE</h3>
                      <p className="works-description">
                        Amazon clone is a site that gives user ability to order ride to their
                        destination.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>Next JS</li>
                <li>Tailwind.css</li>
                <li>Firebase</li>
                <li>Mapbox api</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://weather-react-app-dusky.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${weather})` }}>
                  <div className="code-link">
                    <a
                      href="https://weather-react-app-dusky.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://www.github.com/billboah/weather-react-app"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text ">
                      <h3>THE WEATHER</h3>
                      <p className="works-description">
                        The weather is a site that provides user the current weather base on its
                        location or location the user wants and some details of the weather.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React.js</li>
                <li>Tailwind.css</li>
                <li>Openweathermap api</li>
              </ul>
            </div>

            <div className="works">
              <a href="http://amazon-clone-rosy-two.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${amazon})` }}>
                  <div className="code-link">
                    <a
                      href="https://amazon-clone-rosy-two.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://www.github.com/billboah/amazon-clone"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>AMAZON CLONE</h3>
                      <p className="works-description">
                        Amazon clone is a site that allow user to shop the items he or she prefere
                        with flexibility.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React.js</li>
                <li>CSS</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://clock-react-theta.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${clock})` }}>
                  <div className="code-link">
                    <a href="https://clock-react-theta.vercel.app" target="_blank" rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://www.github.com/billboah/clock-react"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text ">
                      <h3>TIME MACHINE</h3>
                      <p className="works-description">
                        Time machine is a website that provides user the current time base on its
                        location. It has additional features which enhance user experience.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React.js</li>
                <li>CSS</li>
                <li>IP Geolocation api</li>
                <li>WorldTime api</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://beatbox-app-orpin.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${beatbox})` }}>
                  <div className="code-link">
                    <a href="https://beatbox-app-orpin.vercel.app" target="_blank" rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://www.github.com/billboah/beatbox-app"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>BEATBOX</h3>
                      <p className="works-description">
                        Beatbox is a site that provides different beat in which a user can combine
                        to provide music beat.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://myclock-app.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section" style={{ backgroundImage: `url(${myclock})` }}>
                  <div className="code-link">
                    <a href="https://myclock-app.vercel.app" target="_blank" rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://www.github.com/billboah/myclock"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text ">
                      <h3>TIME MACHINE</h3>
                      <p className="works-description">
                        Time machine is a website that provides user the current time base on its
                        location. It has additional features to enhance user experience.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>IP Geolocation api</li>
                <li>WorldTime api</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
