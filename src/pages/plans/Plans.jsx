import Header from '../../components/Header'
import Card from '../../components/Card'
import { plans } from '../../data'
import HeaderImage from '../../assets/header_bg_4.jpg'
import './plans.css'

const Plans = () => {
  return (
    <>
        <Header image={HeaderImage} title="Membership Plans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi animi, mollitia accusantium atque modi ab.
        </Header>
        <section className="plans">
          <div className="container plans_container">
            {
              plans && plans.map(({id, name, desc, price, features}) =>{
                return (
                  <Card key={id} className='plan'>
                      <h3>{name}</h3>
                      <small>{desc}</small>
                      <h1>{`$ ${price}`}</h1>
                      <h2>/mo</h2>
                      <h4>Feature</h4>
                        {
                          features && features.map(({feature, available}, index) =>{
                            return(
                              <p key={index} className={ !available ? 'disable' : ''}>{feature}</p>
                            )
                          })
                        }
                      <button className='btn lg'>Choose Plan</button>
                  </Card>
                )

              })
            }
          </div>
        </section>
      </>
  )
}

export default Plans