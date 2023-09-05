import React from 'react'
import '../StyleSheet/Education.css'

// import images here
import imit from '../Assets/imit.png'
import bdk from '../Assets/bdk.png'

function Education() {
  return (
    <section data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
    <div id='edupage' className='edu'>
         {/* heading */}
      <div className="heading">
        <h2 className="headingTitle flex">EDUCATION  🎓</h2>
        <p className='headingDecs flex'>
          My education has been a journey of self-discovery and growth. My
          educational detials are as follows.
        </p>
      </div>

      <div className="eduBox">

          {/* 1st box */}
                  <div className="clgDiv">
                  <div className="clg">
                      <img src={imit} alt='...' className="eduImage" />
                    <div className="clgName">
                      <h5>Insitute of Mangement & Information Tenchology, Cuttack</h5>
                      <p>Master IN Computer Application</p>
                      <span>Sept 2023 - july 2025</span>
                    </div>
                  </div>

                    <span className="clgGrade">Grade: 8.71CGPA </span>
                    <p className="clgDecs">Hello, I'm an aspiring web developer excited about crafting websites. I'm eager to learn and create user-friendly online experiences that combine design and technology. My goal is to turn coding into captivating websites that people love to use</p>
                  </div>
                  
          {/* 2nd box */}
                  <div className="clgDiv">
                  <div className="clg">
                      <img src={bdk} alt='...' className="eduImage" />
                    <div className="clgName">
                      <h5>Bhadrak Autonomous College, Bhadrak</h5>
                      <p>Bachelor of Science</p>
                      <span>Sept 2023 - july 2025</span>
                    </div>
                  </div>

                    <span className="clgGrade">Grade: 8.71CGPA </span>
                    <p className="clgDecs">Hello, I'm an aspiring web developer excited about crafting websites. I'm eager to learn and create user-friendly online experiences that combine design and technology. My goal is to turn coding into captivating websites that people love to use</p>
                  </div>

          {/* 3rd box */}
                  <div className="clgDiv">
                  <div className="clg">
                      <img src={bdk} alt='...' className="eduImage" />
                    <div className="clgName">
                      <h5>Bhadrak Junior College, Bhadrak</h5>
                      <p>Intermediete Of Science</p>
                      <span>Sept 2023 - july 2025</span>
                    </div>
                  </div>

                    <span className="clgGrade">Grade: 8.71CGPA </span>
                    <p className="clgDecs">Hello, I'm an aspiring web developer excited about crafting websites. I'm eager to learn and create user-friendly online experiences that combine design and technology. My goal is to turn coding into captivating websites that people love to use</p>
                  </div>


    </div>
    </div>
    </section>
  )
}

export default Education