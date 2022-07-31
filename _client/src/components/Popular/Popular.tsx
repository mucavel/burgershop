import SubTitle from '../SubTitle/SubTitle';
import './css/Popular.css';
const popular = require('../../assets/images/popular.webp');
const chill = require('../../assets/images/chill.webp');

const Popular = (): JSX.Element => {
  return (
    <section id="popular">
        <SubTitle subtitle={"Escolhas Populares"}/>
        <div className="popular">
            <div className='popular-left'>
                <div className="popular-burger fade">
                    <img src={popular} alt="Escolha Popular" />
                    <div className="popular-burger-text">
                        <h3>Aquela escolha Popular para saborear</h3>
                    </div>
                </div>
            </div>
            <div className='popular-right'>
                <div className='popular-chill fade'>
                    <img src={chill} alt="Aquele Piri-piri extra!" />
                    <div className="popular-burger-text">
                        <h3>Aquele Piri-piri extra ao seu Gosto!!</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular;