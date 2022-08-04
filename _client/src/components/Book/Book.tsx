import SubTitle from '../SubTitle/SubTitle';
import './css/Book.css';

const Book = () => {
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
                    <select name="choice" required>
                        <option value="">Selecione o Humbúrguer desejado</option>
                        <option value="hamburguer_simples">Hambúrguer Simples</option>
                        <option value="hamburguer_duplo">Hambúrguer Duplo</option>
                        <option value="hamburguer_duplo_king">Hambúrguer Duplo King</option>
                        <option value="batata_frita_com_tomate">Batata Frita com Tomate</option>
                        <option value="hamburguer_duplo_acompanhado">Hambúrguer Duplo Acompanhado</option>
                        <option value="batata_tomate_mayonaise">Batata, Tomate e Mayonaise</option>
                    </select>
                    <textarea cols={30} rows={8} placeholder="Observações" name="observations" autoComplete='off' maxLength={400}></textarea>
                    <input type="hidden" name="_next" value="https://burgershop.vercel.app/"></input>
                    <button className='buy-btn'>Encomendar</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Book;