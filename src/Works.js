import React, { useEffect, useState } from 'react';
import './Works.scss';
import amazon from './assets/work/amazon.png';
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
              <a href="https://amazonclone-billboah.vercel.app/" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${amazon})` }}>
                  <div className="code-link">
                    <a
                      href="https://amazonclone-billboah.vercel.app/"
                      target="_blank"
                      rel="noreferrer">
                      Website
                    </a>
                    <a
                      href="https://github.com/Billboah/amazonclone"
                      target="_blank"
                      rel="noreferrer">
                      Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>AMAZON CLONE</h3>
                      <p className="works-description">
                        Fully functioning frontend-end amazon clone. I has three pages, home page,
                        checkout page and log in page. It is highly responsive and give user best
                        experience. User can search product, add product to cart, remove from cart,
                        and the total price of items added to cart will be calculated and display
                        for the user.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React.js</li>
                <li>Tailwind css</li>
                <li>API call</li>
                <li>Firebase</li>
                <li>Redux</li>
              </ul>
            </div>

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
                        Uber clone is a front-end of uber website clone. It highly responsive and
                        accessible with the best user experience. Users can save their destinations
                        and use it sometime. Users is allow to chose from the car type and they can
                        esily navigate on the website.
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
                <li>API call</li>
                <li>Redux</li>
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
                        location or location the user wants and some details of the weather. User is
                        allow to chose from degree celsius and degree fahrenheit. Defferent
                        background base on the wheather conditions and time of the day which give
                        the user idea of the wheather. It is user friendly and gives best user
                        experience.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React.js</li>
                <li>Tailwind.css</li>
                <li>API call</li>
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
                        location. It has different background base on the time of the day. It gives
                        user random quote which will make user stay at the website anytime it
                        visits. User are granted the permition to see more detail about the time.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>React.js</li>
                <li>CSS</li>
                <li>API call</li>
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
                        location. It has different background base on the time of the day. It gives
                        user random quote which will make user stay at the website anytime it
                        visits. User are granted the permition to see more detail about the time.
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
                <li>API call</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
