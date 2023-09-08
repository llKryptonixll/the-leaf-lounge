import { useForm } from "react-hook-form";

const ContactForm = () => {

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
        <p>Contact Us Now</p>
        <p>Empowering individuals to become leaf enthusiasts - a compilation of articles crafted by the Leaf Lounge team of Plant Enthusiasts.</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </section>
  )
}

export default ContactForm