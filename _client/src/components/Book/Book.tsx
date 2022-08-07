import { useEffect, useRef } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import './css/Book.css';

type ChoiceIDType = {
    burgerID: number | undefined;
}

const Book = ({burgerID}:ChoiceIDType) => {

    const selectRef = useRef<HTMLSelectElement>(null);
    const hamburguer_simples = useRef<HTMLOptionElement>(null);
    const hamburguer_duplo = useRef<HTMLOptionElement>(null);
    const hamburguer_duplo_king = useRef<HTMLOptionElement>(null);
    const batata_frita_com_tomate = useRef<HTMLOptionElement>(null);
    const hamburguer_duplo_acompanhado = useRef<HTMLOptionElement>(null);
    const batata_tomate_mayonaise = useRef<HTMLOptionElement>(null);

    
    useEffect(() => {
        switch (burgerID) {
            case 1:
                hamburguer_simples.current?.setAttribute('selected', 'selected')
                hamburguer_duplo.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_king.current?.setAttribute('hidden', 'hidden')
                batata_frita_com_tomate.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_acompanhado.current?.setAttribute('hidden', 'hidden')
                batata_tomate_mayonaise.current?.setAttribute('hidden', 'hidden')
                break;
            case 2:
                hamburguer_duplo.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_king.current?.setAttribute('hidden', 'hidden')
                batata_frita_com_tomate.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_acompanhado.current?.setAttribute('hidden', 'hidden')
                batata_tomate_mayonaise.current?.setAttribute('hidden', 'hidden')
                break;
            case 3:
                hamburguer_duplo_king.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo.current?.setAttribute('hidden', 'hidden')
                batata_frita_com_tomate.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_acompanhado.current?.setAttribute('hidden', 'hidden')
                batata_tomate_mayonaise.current?.setAttribute('hidden', 'hidden')
                break;
            case 4:
                batata_frita_com_tomate.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_king.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_acompanhado.current?.setAttribute('hidden', 'hidden')
                batata_tomate_mayonaise.current?.setAttribute('hidden', 'hidden')
                break;
            case 5:
                hamburguer_duplo_acompanhado.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_king.current?.setAttribute('hidden', 'hidden')
                batata_frita_com_tomate.current?.setAttribute('hidden', 'hidden')
                batata_tomate_mayonaise.current?.setAttribute('hidden', 'hidden')
                break;
            case 6:
                batata_tomate_mayonaise.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_king.current?.setAttribute('hidden', 'hidden')
                batata_frita_com_tomate.current?.setAttribute('hidden', 'hidden')
                hamburguer_duplo_acompanhado.current?.setAttribute('hidden', 'hidden')
                break;
            default:
                break;
        }
    }, [burgerID])
    
    return (
        <section id="book">
            <SubTitle subtitle='Faça sua Encomenda'/>
            <div className="form-container">
                <form id="form" action="https://formsubmit.co/47e82810e0ba444668143cbcdc232385" method='POST'>
                    <div className="form personal-info">
                        <input type="text" placeholder='Seu Nome' required name='name' autoComplete='off'maxLength={30}/>
                        <input type="tel" placeholder="Seu Telefone (+258)" required name='tel' autoComplete='off' maxLength={9}/>
                        <input type="text" placeholder='Seu Endereço' required name='address' autoComplete='off' maxLength={100}/>
                    </div>
                    <div className="form choice">
                        <select name="choice" required ref={selectRef}>
                            <option ref={hamburguer_simples} value="hamburguer_simples">Hambúrguer Simples</option>
                            <option ref={hamburguer_duplo} value="hamburguer_duplo">Hambúrguer Duplo</option>
                            <option ref={hamburguer_duplo_king} value="hamburguer_duplo_king">Hambúrguer Duplo King</option>
                            <option ref={batata_frita_com_tomate} value="batata_frita_com_tomate">Batata Frita com Tomate</option>
                            <option ref={hamburguer_duplo_acompanhado} value="hamburguer_duplo_acompanhado">Hambúrguer Duplo Acompanhado</option>
                            <option ref={batata_tomate_mayonaise} value="batata_tomate_mayonaise">Batata, Tomate e Mayonaise</option>
                        </select>
                        <textarea cols={30} rows={8} placeholder="Observações" name="observations" autoComplete='off' maxLength={400}></textarea>
                        <input type="hidden" name="_next" value="http://localhost:3000/#book"></input> 
                        <input type="hidden" name="_next" value="https://burgershop.vercel.app/"></input>
                        <button className='buy-btn'>Encomendar</button>
                    </div>
                </form>
            </div>
        </section>
        )
}

export default Book;
