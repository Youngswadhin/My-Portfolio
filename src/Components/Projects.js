import React, { useState } from 'react';
import '../StyleSheet/Project.css';
import img2 from '../Assets/img2.jpg'; // Replace with your Android and UX/UI images
import img3 from '../Assets/img3.jpg'; // Replace with the correct path to your Android image
import img4 from '../Assets/img4.jpg'; // Replace with the correct path to your UX/UI image

const Projects = () => {
  const [activeButton, setActiveButton] = useState('ALL');
  const [showWeb, setShowWeb] = useState(true); // Show web content by default
  const [showAndroid, setShowAndroid] = useState(true); // Show Android content by default
  const [showUXUI, setShowUXUI] = useState(true); // Show UX/UI content by default

  const toggleDiv = (buttonName) => {
    setActiveButton(buttonName);
    setShowWeb(buttonName === 'WEB' || buttonName === 'ALL');
    setShowAndroid(buttonName === 'ANDROID' || buttonName === 'ALL');
    setShowUXUI(buttonName === 'UX/UI' || buttonName === 'ALL');
  };

  return (
    <section
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-smooth-scroll="true"
      className="scrollspy-example"
      tabIndex="0"
    >
      <div id="projpage" className="project container">
         <div className="heading">
          <h2 className="headingTitle flex">PROJECTS</h2>
          <p className="headingDecs">
            I have worked on a wide range of projects. From web apps to Android apps and UX/UI projects. Here are some of my projects.
    
          </p>
        </div>

        <div className="btnList">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button
              type="button"
              className={`btn btn-outline-info ${activeButton === 'ALL' ? 'active' : ''}`}
              onClick={() => toggleDiv('ALL')}
            >
              ALL
            </button>
            <button
              type="button"
              className={`btn btn-outline-info ${activeButton === 'WEB' ? 'active' : ''}`}
              onClick={() => toggleDiv('WEB')}
            >
              WEB APPS
            </button>
            <button
              type="button"
              className={`btn btn-outline-info ${activeButton === 'ANDROID' ? 'active' : ''}`}
              onClick={() => toggleDiv('ANDROID')}
            >
              ANDROID APPS
            </button>
            <button
              type="button"
              className={`btn btn-outline-info ${activeButton === 'UX/UI' ? 'active' : ''}`}
              onClick={() => toggleDiv('UX/UI')}
            >
              UX/UI
            </button>
          </div>
        </div>

        <div className="cardDiv">
          {showWeb && (
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">1st project</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          )}

          {showAndroid && (
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." /> {/* Replace with the correct path */}
              <div className="card-body">
                <h5 className="card-title">Android project</h5>
                <p className="card-text">Description of your Android project goes here.</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          )}

          {showUXUI && (
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." /> {/* Replace with the correct path */}
              <div className="card-body">
                <h5 className="card-title">UX/UI project</h5>
                <p className="card-text">Description of your UX/UI project goes here.</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
