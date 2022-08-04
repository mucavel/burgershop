import { FaHamburger, FaWhatsappSquare, FaReact, FaInstagramSquare } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { BsHeartFill, BsFacebook } from 'react-icons/bs';
import {IoIosCall} from 'react-icons/io';
import {FiMail} from 'react-icons/fi';
import SubTitle from '../SubTitle/SubTitle';
import './css/Footer.css';

const Footer = () => {
    const typescriptIcon = {fontSize: '14pt', color: '#007ACC'}
    const reactIcon = {fontSize: '14pt', color: '#61DBFB'}
    const call = {fontSize: '30pt', color: '#FFFFFF', marginBottom: '-10px'}
    const facebook = {fontSize: '30pt', color: 'blue', marginBottom: '-10px'}
    const whatsapp = {fontSize: '30pt', color: '#28D146', marginBottom: '-10px'}
    const instagram = {fontSize: '30pt', color: '#F77737', marginBottom: '-10px'}
    const mail = {fontSize: '30pt', color: '#FFFFFF', marginBottom: '-10px'}

  return (
    <section id="footer">
        <SubTitle subtitle='Contacte-nos'/>
        <div className='footer'>
            <div className="fade">
                <div className="footer-container">
                    <div className="contact">
                    <div className="footer-logo" style={{color: "var(--white)"}}>
                    <span><FaHamburger className='burger-ico'/> <p>The Corner Take Away</p></span>
                    </div>
                    <div className="phone">
                        <span><IoIosCall style={call}/></span>
                        <span><a href="tel:258878450338">(+258) 878450338</a></span>
                    </div>
                    <div className="facebook">
                        <span><BsFacebook style={facebook}/></span>
                        <span><a href="https://www.facebook.com/geraldopondeca/">The Corner Take Away</a></span>
                    </div>
                    <div className="whatsapp">
                        <span><FaWhatsappSquare style={whatsapp}/></span>
                        <span><a href="https://api.whatsapp.com/send?phone=258878450338&app=facebook&entry_point=page_cta">+258 87 845 0338</a></span>
                    </div>
                    <div className="instagram">
                        <span><FaInstagramSquare style={instagram}/></span>
                        <span><a href="https://www.instagram.com/mr.pondeca/">Mr.Pondeca</a></span>
                    </div>
                    <div className='mail'>
                        <span><FiMail style={mail}/></span>
                        <span><a href="mailto:pondecageraldo@gmail.com">pondecageraldo@gmail.com</a></span>
                    </div>
                    </div>
                    <div className="map">
                    <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7177.219976850818!2d32.487995214412415!3d-25.91518866851543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee68fa650d7ab47%3A0x2ea29e9242017ad0!2sEscola%20Secundaria%20da%20Machava!5e0!3m2!1sen!2smz!4v1659567941671!5m2!1sen!2smz" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="developer">
            <p>
                Desenvolvido em <span style={typescriptIcon}><SiTypescript/> </span> e 
                <span style={reactIcon}> <FaReact/></span> com muito  
                <span style={{color: "red"}}> <BsHeartFill/></span> por : 
                <span className='developer-name'> <a href="https://salvadormucavel.vercel.app" target="_blank" rel="noreferrer"><b>Salvador Carlos Mucavele</b></a></span>
            </p>
        </div>
    </section>
  )
}

export default Footer;