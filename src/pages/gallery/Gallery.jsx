import Header from '../../components/Header'
import HeaderImage from '../../assets/header_bg_3.jpg'
import {galleryImage} from '../../data'
import './gallery.css'

const Gallery = () => {
    // const galleryLength = 15;
    // const images = [];
    // for(let i = 1; i <= galleryLength; i++){
    //   images.push(require(`../../assets/gallery${i}.jpg`).default)
    // }
    // console.log(images)

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa veniam impedit porro fuga, doloribus corrupti numquam sapiente provident aliquam nesciunt quasi sint facere mollitia omnis!
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
            {
                galleryImage.map(({id, image, title, desc}) =>{
                  return (
                    <article key={id}>
                        <img src={image} alt={`Gallery Image ${id}`} />
                        <div className="gallery_content">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        </div>
                    </article>
                  )
                })
            }
        </div>
      </section>
    </>
  )
}

export default Gallery