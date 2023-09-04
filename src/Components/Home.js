import React from 'react'
import '../StyleSheet/Home.css'

// Import images here
import github from '../Assets/github.svg'
import linkedin from '../Assets/linkedin.svg'
import insta from '../Assets/instagram.png'
import mail from '../Assets/gmail.svg'

const Home = () => {

    const handleWhatsAppClick = () => {
    // Replace '1234567890' with the phone number you want to send a message to.
    const phoneNumber = '8117002071';
    
    // Replace 'Hello%20World' with the message you want to send (URL-encoded).
    const message = 'Hello...Swadhin';
    
    // Generate the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink);
  };

  return (
      <section data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">

            <div id='homepage' className='home container'>
              <h1 className='homeTitle'>SWADHIN MUDULI</h1>
              <h3 className='homeSubTitle'>FULL STACK DEVELOPER</h3>
                <p className='homeDecs'>Hello, I'm an aspiring web developer excited about crafting websites. I'm eager to learn and create user-friendly online experiences that combine design and technology. My goal is to turn coding into captivating websites that people love to use.</p>
                <div className='homeSocial '>
                  <button className='resume'>See My Resume</button>
                  <a href='https://github.com/Youngswadhin' ><img src={github} alt='..' className='icon git' /></a>
                  <a href='https://www.linkedin.com/in/swadhin-kumar-muduli-6b4ab7261' ><img src={linkedin} alt='..' className='icon' /></a>
                  <a href='https://instagram.com/young_swadhin?igshid=NGExMmI2YTkyZg==' ><img src={insta} alt='..' className='icon' /></a>
                  <a href='mailto:youngswadhin@gmail.com' ><img src={mail} alt='..' className='icon' /></a>
                </div>
                 <button onClick={handleWhatsAppClick} className='sayHello'>Say Hello👋</button>
        </div>
        </section>
  )
}

export default Home