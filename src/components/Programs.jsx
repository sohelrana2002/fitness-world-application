import {FaCrown} from 'react-icons/fa'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from './SectionHead'
import { programs } from '../data'
import { Link } from 'react-router-dom'
import Card from './Card'

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs_container">
            <SectionHead icons={<FaCrown/>} title="Programs" />

        <div className="programs_wrapper">
            {
                programs.map(({id, icon, title, info, path}) =>{
                    return(
                        <Card className="programs_program" key={id}>
                            <div className="program_image">
                            <img className='code_image' src={icon} alt="Code Image" />
                            </div>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className='btn sm program_btn'>Learn More<AiFillCaretRight/> </Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs