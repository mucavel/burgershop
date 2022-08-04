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
                    <h3>Hambúrguer Duplo</h3>
                    <h4>Duração: Todas Sextas-feiras</h4>
                    <p>
                    Imagina em uma única mordida sentir o maior prazer da sua vida…
                     Aqui é possível! Nossos hambúrgueres são uma explosão de sabor e maravilha a cada pedaço.
                    O nosso hambúrguer é tão bom que eu acho injusto você não provar. Para te ajudar o 
                    dono enlouquece: Só nas sextas você compra um normal e leva um DUPLO! Mas corra, 
                    porque é só das 17h-20h, viu? Se um era bom, imagina dois!
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