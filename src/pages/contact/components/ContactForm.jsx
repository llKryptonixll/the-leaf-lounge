import React from 'react'

const ContactForm = () => {
  return (
    <section className="form_section">
      <div className="form_header">
        <p>Contact Us Now</p>
        <p>Empowering individuals to become leaf enthusiasts - a compilation of articles crafted by the Leaf Lounge team of Plant Enthusiasts.</p>
      </div>
      
      <form action="">
        <div className="input_wrapper">
          <label htmlFor="name">Your Name</label>
          <input placeholder='e.g. Lucas Cerri' id='name' name='name' type="text" />
        </div>
        <div className="input_wrapper">
          <label htmlFor="email">Your Email Address</label>
          <input placeholder='e.g. leafLounge@mail.com' id='email' name='email' type="text" />
        </div>
        <div className='input_wrapper'>
          <label htmlFor='message'>Your Message</label>
          <textarea placeholder='e.g. Hello I need an advice on which plants would suit my house' name="message" id="message"></textarea>
        </div>
        <button className='submit_button' type='submit'>Contact Us</button>
      </form>
    </section>
  )
}

export default ContactForm