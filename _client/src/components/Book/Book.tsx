import { MouseEvent, useEffect, useRef } from 'react';
import Axios from 'axios';
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

    const nameInput = useRef<HTMLInputElement>(null)
    const telInput = useRef<HTMLInputElement>(null)
    const addressInput = useRef<HTMLInputElement>(null)
    const obsRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        switch (burgerID) {
            case 1:
                hamburguer_simples.current?.setAttribute('selected', 'selected')
                hamburguer_duplo.current?.removeAttribute('selected')
                hamburguer_duplo_king.current?.removeAttribute('selected')
                batata_frita_com_tomate.current?.removeAttribute('selected')
                hamburguer_duplo_acompanhado.current?.removeAttribute('selected')
                batata_tomate_mayonaise.current?.removeAttribute('selected')
                break;
            case 2:
                hamburguer_duplo.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.removeAttribute('selected')
                hamburguer_duplo_king.current?.removeAttribute('selected')
                batata_frita_com_tomate.current?.removeAttribute('selected')
                hamburguer_duplo_acompanhado.current?.removeAttribute('selected')
                batata_tomate_mayonaise.current?.removeAttribute('selected')
                break;
            case 3:
                hamburguer_duplo_king.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.removeAttribute('selected')
                hamburguer_duplo.current?.removeAttribute('selected')
                batata_frita_com_tomate.current?.removeAttribute('selected')
                hamburguer_duplo_acompanhado.current?.removeAttribute('selected')
                batata_tomate_mayonaise.current?.removeAttribute('selected')
                break;
            case 4:
                batata_frita_com_tomate.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.removeAttribute('selected')
                hamburguer_duplo.current?.removeAttribute('selected')
                hamburguer_duplo_king.current?.removeAttribute('selected')
                hamburguer_duplo_acompanhado.current?.removeAttribute('selected')
                batata_tomate_mayonaise.current?.removeAttribute('selected')
                break;
            case 5:
                hamburguer_duplo_acompanhado.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.removeAttribute('selected')
                hamburguer_duplo.current?.removeAttribute('selected')
                hamburguer_duplo_king.current?.removeAttribute('selected')
                batata_frita_com_tomate.current?.removeAttribute('selected')
                batata_tomate_mayonaise.current?.removeAttribute('selected')
                break;
            case 6:
                batata_tomate_mayonaise.current?.setAttribute('selected', 'selected')
                hamburguer_simples.current?.removeAttribute('selected')
                hamburguer_duplo.current?.removeAttribute('selected')
                hamburguer_duplo_king.current?.removeAttribute('selected')
                batata_frita_com_tomate.current?.removeAttribute('selected')
                hamburguer_duplo_acompanhado.current?.removeAttribute('selected')
                break;
            default:
                break;
        }
    }, [burgerID])
    
    const book = (e:MouseEvent) => {
        e.preventDefault();

        if(
            nameInput.current?.value === null ||
            nameInput.current?.value === '' ||
            telInput.current?.value === null ||
            telInput.current?.value === '' ||
            addressInput.current?.value === null ||
            addressInput.current?.value === ''
        ){
            alert('Preencha todos Campos!')
        }else if(
            telInput.current?.value.substring(0, 2) === '82' ||
            telInput.current?.value.substring(0,2) === '83' ||
            telInput.current?.value.substring(0, 2) === '84' ||
            telInput.current?.value.substring(0, 2)  === '85' ||
            telInput.current?.value.substring(0, 2)  === '86' ||
            telInput.current?.value.substring(0, 2) === '87'
        ){
            if(telInput.current?.value.length !== 9){
                alert('Número de Telefone incompleto')
            }else{
                Axios.post("http://localhost:3001/booking", {
                    buyerName : nameInput.current?.value,
                    buyerTel : telInput.current?.value,
                    buyerAddress : addressInput.current?.value,
                    buyerChoice : selectRef.current?.value,
                    observations : obsRef.current?.value
                }).then((response) => {
                    if(response.status === 200 && response.data.affectedRows === 1){
                        alert('Pedido feito com Sucesso!')
                        window.location.reload()
                    }else{
                        alert('Ocorreu um erro. Verifique seus dados e tente novamente.')
                    }
                })
            }
        }else{
            alert('Verifique o número de Telefone')
        }



    }

    return (
        <section id="book">
            <SubTitle subtitle='Faça sua Encomenda'/>
            <div className="form-container">
                <form id="form">
                {/* <form id="form" action="https://formsubmit.co/47e82810e0ba444668143cbcdc232385" method='POST'> */}

                    <div className="form personal-info">
                        <input type="text" ref={nameInput} placeholder='* Seu Nome' required name='name' autoComplete='off' maxLength={30}/>
                        <input type="tel" ref={telInput} placeholder="* Seu Telefone (+258)" required name='tel' autoComplete='off' maxLength={9}/>
                        <input type="text" ref={addressInput} placeholder='* Seu Endereço' required name='address' autoComplete='off' maxLength={100}/>
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
                        <textarea ref={obsRef} cols={30} rows={8} placeholder="Observações" name="observations" autoComplete='off' maxLength={400}></textarea>
                        {/* <input type="hidden" name="_next" value="http://localhost:3000/#book"></input> 
                        <input type="hidden" name="_next" value="https://burgershop.vercel.app/"></input> */}
                        <button className='buy-btn' onClick={book}>Encomendar</button>
                    </div>
                </form>
            </div>
        </section>
        )
}

export default Book;
