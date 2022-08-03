import { FaHamburger } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { BsHeartFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa'
import SubTitle from '../SubTitle/SubTitle';
import './css/Footer.css';

const Footer = () => {
    const typescriptIcon = {fontSize: '14pt', color: '#007ACC', marginBottom: '-20px'}
    const reactIcon = {fontSize: '14pt', color: '#61DBFB'}
  return (
    <section id="footer">
        <SubTitle subtitle='Contacte-nos'/>
        <div className='footer'>
            <div className="fade">
                <div className="footer-container">
                    <div className="contact">
                    <span 
                        className="nav-logo" style={{color: "var(--white)"}}>
                        <FaHamburger className="burger-ico"/>Burger Shop
                        <p>llllllllllllllllllll</p>
                        <p>llllllllllllllllllll</p>
                        <p>llllllllllllllllllll</p>
                        <p>llllllllllllllllllll</p>
                        <p>llllllllllllllllllll</p>
                        <p>llllllllllllllllllll</p>
                    </span>
                    </div>
                    <div className="map">
                    <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1794.299824772892!2d32.50156514346601!3d-25.915528386795415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee68f4bb40c276f%3A0x565f39c30a364512!2sN%20Sabores%20Take%20Away%20-%20Fast%20Food%2C%20a%20melhor%20comida%20r%C3%A1pida%20na%20cidade!5e0!3m2!1sen!2smz!4v1659536102678!5m2!1sen!2smz" width="400" height="300" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="developer">
            <p>
                Desenvolvido em <span style={typescriptIcon}><SiTypescript/> </span> e 
                <span style={reactIcon}> <FaReact/></span> com muito  
                <span style={{color: "red"}}> <BsHeartFill/></span> por 
                <span className='developer-name'> <b>Salvador Carlos Mucavele</b></span>
            </p>
        </div>
    </section>
  )
}

export default Footer;