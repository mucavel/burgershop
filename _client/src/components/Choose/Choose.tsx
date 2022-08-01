import './css/Choose.css';
import SubTitle from '../SubTitle/SubTitle';
import ChooseCard from './ChooseCard';
import { Menu } from './Menu';

const Choose = () => {
  return (
    <section id='menu'>
        <SubTitle subtitle='Escolha & Saboreia'/>
        <div className="menu">
            <div className="choose">
                {Menu.map((item) => {
                    return(
                        <ChooseCard 
                            key={item.id} 
                            img={item.img}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Choose;