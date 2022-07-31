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
                    <h1 className='home-h1'>The Burger Shop</h1>
                    <h2 className='home-h2'>O melhor Humbúrger tu encontras aqui!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        labore obcaecati suscipit dolorum quis minima omnis libero quo aperiam esse.
                    </p>
                    <button className='home-by-btn'>
                        <a href="#choose">Comprar</a>
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