interface ChooseOpts{
    id:number;
    img: string;
    name: string;
    description: string;
    price: string;
    setSelectedBurger(burgerID:number):void
}
const ChooseCard = ({id, img, name, description, price, setSelectedBurger}:ChooseOpts): JSX.Element => {
    return (
    <div className="choose-card">
        <div className="choose-img">
            <img src={img} alt="Hambúrguer" />
        </div>
        <div className="choose-name">
            <h4>{name}</h4>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        <div className="choose-price">
            <span><b>{"Preço : "  + price}</b></span>
        </div>
        <div className="choose-btn">
            <button className="buy-btn choose-buy-btn">
                <a href="#book" onClick={() =>setSelectedBurger(id)}>Comprar</a>
            </button>
        </div>
    </div>
  )
}

export default ChooseCard;