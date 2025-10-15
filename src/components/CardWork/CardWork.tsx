import "./CardWork.css"

interface CardWorkProps {
    icon: string;
    title: string;
    description: string
}

const CardWork = ({icon, title, description} : CardWorkProps) => {
    return (
        <div className="cardWork">
            <img src={icon} alt="icon"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default CardWork
