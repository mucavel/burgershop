import './css/Home.css';
import Navbar from './Navbar';
const logo = require('../../assets/images/logo.png');

const Home = (): JSX.Element => {
  return (
    <header id='home'>
        <Navbar/>
        <div className="home">
            <div className='home-text'>
                <div className='home-text-container'>
                    <h1 className='home-h1' style={{color: "var(--brown)"}}>The Corner Take Away</h1>
                    <h2 className='home-h2'>O melhor Humbúrger tu encontras aqui!</h2>
                    <p>
                        O The Corner Take Away é um restaurante de comida rápida e deliciosa. Pronto para deixar ficar seu nome no mercado nacional.
                    </p>
                    <button className='buy-btn'>
                        <a href="#menu">Comprar</a>
                    </button>
                </div>
            </div>
            <div className="home-logo">
                <img src={logo} alt="Humburger Logo" />
            </div>
        </div>
    </header>
  )
}

export default Home;