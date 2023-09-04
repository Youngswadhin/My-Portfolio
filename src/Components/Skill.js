import React, { useEffect, useState } from 'react';
import '../StyleSheet/Skill.css';
import code from '../Assets/code.png';
import andriod from '../Assets/android.png';
import ux from '../Assets/ux.png';

function Skill() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillPage = document.querySelector('.scrollspy-example');
      const scrollThreshold = skillPage.offsetTop;

      if (window.scrollY > scrollThreshold) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-smooth-scroll="true"
      className="scrollspy-example"
      tabIndex="0"
    >
      <div id="skillpage" className="skill container">
        <div className="heading">
          <h2 className="headingTitle flex">SKILLS</h2>
          <p className="headingDecs">
            Here are some of my skills on which I have been working on for the
            past 1 year.
          </p>
        </div>

        <div className="skillDiv ">
          {/* Frontend */}
          <div className="skillBox">
            <img src={code} className="skillIcon" alt="..." />

            <div className="skillName">
              <h4 className="skillTitle">--- FRONTEND ---</h4>
              <p className="skillDecs">
                ⚡ Building responsive website front end. ⚡ Creating
                application backend in Node, Express & Flask
              </p>
            </div>
          </div>

          {/* Android */}
          <div className="skillBox">
            <img src={andriod} className="skillIcon" alt="..." />

            <div className="skillName">
              <h4 className="skillTitle">--- ANDROID ---</h4>
              <p className="skillDecs">
                ⚡ Building responsive website front end. ⚡ Creating
                application backend in Node, Express & Flask
              </p>
            </div>
          </div>

          {/* UX/UI */}
          <div className="skillBox">
            <img src={ux} className="skillIcon" alt="..." />

            <div className="skillName">
              <h4 className="skillTitle">--- UX/UI ---</h4>
              <p className="skillDecs">
                ⚡ Building responsive website front end. ⚡ Creating
                application backend in Node, Express & Flask
              </p>
            </div>
          </div>

          {/* Frontend */}
          <div className="skillBox">
            <img src={code} className="skillIcon" alt="..." />

            <div className="skillName">
              <h4 className="skillTitle">--- FRONTEND ---</h4>
              <p className="skillDecs">
                ⚡ Building responsive website front end. ⚡ Creating
                application backend in Node, Express & Flask
              </p>
            </div>
          </div>
        </div>

        {showPopup && (
        <div className="alertment popup">
          <div
            className="alert popup-content alert-warning alert-dismissible fade show"
            role="alert"
          >
            Hey......! Just hover and see the skills. Thank You.....
            <button
              onClick={() => setShowPopup(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        )}


      </div>
    </section>
  );
}

export default Skill;
