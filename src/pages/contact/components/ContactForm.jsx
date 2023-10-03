import { useContext } from "react";
import AnimationContext from "../../../context/AnimationContext";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { textAnimation1, textAnimation2 } = useContext(AnimationContext)
  const formAnimation = {
    initial: { opacity: 0, top: -30 },
    whileInView: { opacity: 1, top: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
}

  const { register, handleSubmit, formState: { errors } } = useForm();
  const inputErrorStyles = {
    backgroundColor: "#FF4D4D",
    outline: "none"
  }
  const errorMessageStyles = {
    fontWeight: 600
  }
  const onSubmit = data => console.log(data); 

  return (
    <section className="form_section">
      <div className="form_header">
        <motion.p {...textAnimation1}>Contact Us Now</motion.p>
        <motion.p {...textAnimation2}>Empowering individuals to become leaf enthusiasts - a compilation of articles crafted by the Leaf Lounge team of Plant Enthusiasts.</motion.p>
      </div>
      
      <motion.form {...formAnimation} onSubmit={handleSubmit(onSubmit)}>
        <div className="input_wrapper">
          <label htmlFor="name">Your Name</label>
          <input
            style={errors.name && {...inputErrorStyles}}
            {...register("name", {
              required: "This field is required",
              pattern: {
                value: /^[^\d]+$/,
                message: "Can not contain numbers"
              }
            })}
            placeholder='e.g. Lucas Cerri'
            type="text"
            name='name'
            id='name'
          />
          {errors.name && <span style={{...errorMessageStyles}}>{errors.name.message}</span>}
        </div>
        <div className="input_wrapper">
          <label htmlFor="email">Your Email Address</label>
          <input
            style={errors.email && {...inputErrorStyles}}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a correct email address"
              }
            })}
            placeholder='e.g. leafLounge@mail.com'  
            type="text"
            name='email'
            id='email'
          />
          {errors.email && <span style={{...errorMessageStyles}}>{errors.email.message}</span>}
        </div>
        <div className='input_wrapper'>
          <label htmlFor='message'>Your Message</label>
          <textarea 
            style={errors.message && {...inputErrorStyles}}
            {...register("message", { 
              required: true 
            })} 
            placeholder='e.g. Hello I need an advice on which plants would suit my house' 
            name="message" 
            id="message">
          </textarea>
          {errors.message && <span style={{...errorMessageStyles}}>This field is required</span>}
        </div>
        <button className='submit_button' type='submit'>Contact Us</button>
      </motion.form>
    </section>
  )
}

export default ContactForm