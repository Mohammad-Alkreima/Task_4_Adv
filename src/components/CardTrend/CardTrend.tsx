import "./CardTrend.css"

interface CardTrandProps {
    image: string;
    price: string;
    title: string;
    icon: string;
    desc: string
}

const CardTrend = ({image, price, title, icon, desc} : CardTrandProps) => {
    return (
        <div className="cardTrend">
            <img src={image} alt="house" />
            <h2>{price}</h2>
            <h3>{title}</h3>
            <div>
                <img src={icon} alt="location icon" />
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default CardTrend
