import CardMostTrending from "../../Data/CardMostTrending"
import CardTrend from "../CardTrend/CardTrend"
import TitleSection from "../TitleSection/TitleSection"
import "./MostTrending.css"

const MostTrending = () => {
    return (
        <section className="mostTrending marginBottom paddingLeftRight">
            <TitleSection title="Most Trending"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
            />
            <div className="allCardsTrending">
                {CardMostTrending?.map((cardData, index) => {
                    return(
                        <CardTrend key={index}
                                    image={cardData.image}
                                    price={cardData.price}
                                    title={cardData.title}
                                    icon={cardData.icon}
                                    desc={cardData.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default MostTrending
