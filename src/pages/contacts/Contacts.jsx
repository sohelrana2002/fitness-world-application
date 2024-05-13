import Header from '../../components/Header'
import HeaderImage from '../../assets/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contacts.css'

const Contacts = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore tenetur unde distinctio deserunt dolorum corrupti molestias aut provident sit.
      </Header>
      <section className='contact'>
        <div className="container contact_container">
          <div className="contact_wrapper">
              <a href="#"><MdEmail/></a>
              <a href="#"><BsMessenger/></a>
              <a href="#"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
   </>
  )
}

export default Contacts