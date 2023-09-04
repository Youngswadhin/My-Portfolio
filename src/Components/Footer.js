import React from 'react'
import '../StyleSheet/Footer.css'

import {BsEmojiSmile} from 'react-icons/bs'

const Footer = () => {
  
  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the phone number you want to send a message to.
    const phoneNumber = '8117002071';
    
    // Replace 'Hello%20World' with the message you want to send (URL-encoded).
    const message = 'Hey...Swadhin';
    
    // Generate the WhatsApp link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink);
  };
  
  return (
    
    <section className='footer'>
        <div className='footer-head'>
            <h2>Start  a project</h2>
            <p>Let's work together, and create something really amazing.</p>
            <button onClick={handleWhatsAppClick}  className='collaborateBtn'><BsEmojiSmile className='icon' />Let's Collaborate</button>
        </div>

        <h2>Living, learning & travelling</h2>
        <p>Create with ❤️ by me</p>
    </section>
  )
}

export default Footer