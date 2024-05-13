import Card from './Card'

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className='trainer'>
        <div className="trainer_img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer_socials">
            {
                socials && socials.map(({icon, link}, index) =>{
                    return(
                        <a href={link} key={index} target='_blank'>{icon}</a>
                    )
                })
            }
        </div>
    </Card>
  )
}

export default Trainer