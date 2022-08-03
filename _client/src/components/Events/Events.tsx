import SubTitle from '../SubTitle/SubTitle';
import './css/Events.css';
const events = require('../../assets/images/events.webp');

const Events = () => {
  return (
    <section id="events">
        <SubTitle subtitle='Promoções & Eventos'/>
        <div className='events'>
            <div className="events-text">
                <div className="item-in-promotion">
                    <h3>Promoção</h3>
                    <h3>Hambúrguer Extra Fat & Batatas</h3>
                    <h4>Duração: 02-08-2022 até 02-09-2022</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eveniet quo corporis, adipisci possimus enim asperiores, 
                        expedita accusantium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eveniet quo corporis, adipisci possimus enim asperiores, 
                        expedita accusantium.
                    </p>
                    <div className="events-btn">
                        <button className='buy-btn'>Comprar</button>
                    </div>
                </div>
            </div>
            <div className="events-img">
                <img src={events} alt="Promoção" />
            </div>
        </div>
    </section>
  )
}

export default Events;