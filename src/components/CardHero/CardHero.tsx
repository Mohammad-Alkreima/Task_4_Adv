import "./CardHero.css"

interface CardHeroProps {
    icon: string;
    title: string;
    description: string
}

const CardHero = ({icon, title, description} : CardHeroProps) => {
    return (
        <div className="cardHero">
            <div className="img">
                <img src={icon} alt="icon" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardHero
