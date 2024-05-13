import Header from '../../components/Header'
import HedaerBgImage from '../../assets/header_bg_1.jpg'
import StoryImage from '../../assets/about1.jpg'
import VisionImage from '../../assets/about2.jpg'
import MissionImage from '../../assets/about3.jpg'
import './about.css'

const About = () => {
  return (
    <div>
      <Header title="About Us" image={HedaerBgImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore tenetur unde distinctio deserunt dolorum corrupti molestias aut provident sit.
      </Header>
      <section className='about_story'>
        <div className="container about_story_container">
          <div className="about_section_image">
              <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about_section_content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur enim quis atque dignissimos vero, quam ut soluta provident aliquam earum cumque possimus impedit incidunt cum nihil laboriosam! Enim dolore mollitia vero repellat sint, illo voluptatem.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus libero veritatis atque alias ipsum expedita doloribus dolores tenetur similique ea a, non nisi nesciunt?</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad, enim tenetur iure debitis in.
            </p>
          </div>
        </div>

      </section>

      <section className='about_vision'>
        <div className="container about_vision_container">
          <div className="about_section_content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur enim quis atque dignissimos vero, quam ut soluta provident aliquam earum cumque possimus impedit incidunt cum nihil laboriosam! Enim dolore mollitia vero repellat sint, illo voluptatem.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus libero veritatis atque alias ipsum expedita doloribus dolores tenetur similique ea a, non nisi nesciunt?</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad, enim tenetur iure debitis in.
            </p>
          </div>
          <div className="about_section_image">
              <img src={VisionImage} alt="Vision Image" />
          </div>
        </div>

      </section>

      <section className='about_mission'>
        <div className="container about_mission_container">
          <div className="about_section_image">
              <img src={MissionImage} alt="mission Image" />
          </div>
          <div className="about_section_content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur enim quis atque dignissimos vero, quam ut soluta provident aliquam earum cumque possimus impedit incidunt cum nihil laboriosam! Enim dolore mollitia vero repellat sint, illo voluptatem.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus libero veritatis atque alias ipsum expedita doloribus dolores tenetur similique ea a, non nisi nesciunt?</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad, enim tenetur iure debitis in.
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default About