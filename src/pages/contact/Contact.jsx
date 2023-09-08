import ContactHeader from './components/ContactHeader'
import Mapbox from './components/Mapbox'
import ContactForm from './components/ContactForm'

const Contact = () => {
  return (
    <main className='main_contact'>
      <ContactHeader />
      <Mapbox />
      <ContactForm />
    </main>
  )
}

export default Contact