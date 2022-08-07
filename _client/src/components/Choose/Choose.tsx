import './css/Choose.css';
import SubTitle from '../SubTitle/SubTitle';
import ChooseCard from './ChooseCard';
import { Menu } from './Menu';

interface IDTYPE{
    setSelectedBurger(id:number):void
}

const Choose = ({setSelectedBurger}:IDTYPE) => {
  return (
    <section id='menu'>
        <SubTitle subtitle='Escolha & Saboreia'/>
        <div className="menu">
            <div className="choose">
                {Menu.map((item) => {
                    return(
                        <ChooseCard 
                            key={item.id} 
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            setSelectedBurger={setSelectedBurger}
                        />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Choose;