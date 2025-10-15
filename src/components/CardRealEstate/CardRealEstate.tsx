import "./CardRealEstate.css"

interface CardRealProps {
    img: string;
    text: string;
    span: string
}

const CardRealEstate = ({img, text, span} : CardRealProps) => {
    return (
        <div className="cardReal">
            <img src={img} alt="" />
            <p>{text}</p>
            <span>{span}</span>
        </div>
    )
}

export default CardRealEstate
