import CardHeroData from "../../Data/CardHeroData"
import CardHero from "../CardHero/CardHero"
import TitleSection from "../TitleSection/TitleSection"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero marginBottom">
            <TitleSection title="Discover a place you will love to live"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
            />
            <div className="cards">
                {CardHeroData?.map((data, index) => {
                    return(
                        <CardHero key={index} icon={data.icon}
                                    title={data.title}
                                    description={data.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Hero
