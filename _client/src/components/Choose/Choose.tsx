import './css/Choose.css';
import SubTitle from '../SubTitle/SubTitle';
import ChooseCard from './ChooseCard';
import { Menu } from './Menu';
// import { useState } from 'react';

interface IDTYPE{
    setChoiceID(e:number):void
}

const Choose = ({setChoiceID}:IDTYPE) => {
    // const[selectedID, setSelectedID] = useState<number>();

    // const setChoiceID = (choiceID:number) => {
    //     const ChoiceID = choiceID;
    //     console.log(ChoiceID)
    // }

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
                            setSelectedID={setChoiceID}
                        />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Choose;