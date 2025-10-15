import CardWorkData from "../../Data/CardWorkData"
import CardWork from "../CardWork/CardWork"
import TitleSection from "../TitleSection/TitleSection"
import "./HowItWork.css"

const HowItWork = () => {
    return (
        <section className="howItWork paddingLeftRight marginBottom">
            <TitleSection title="How it Works"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
            />
            <div className="allCardsWork">
                {CardWorkData?.map((workData, index) => {
                    return(
                        <CardWork key={index}
                                icon={workData.icon}
                                title={workData.title}
                                description={workData.description}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default HowItWork
