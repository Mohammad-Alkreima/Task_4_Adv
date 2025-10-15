import { useState } from "react";
import TitleSection from "../TitleSection/TitleSection"
import "./BestRealEstateDeals.css"
import CardRealEstateData from "../../Data/CardRealEstateData";
import CardRealEstate from "../CardRealEstate/CardRealEstate";

interface RealProps {
    filters: Array<string>
}

const BestRealEstateDeals = ({filters} : RealProps) => {
    const [selectedType, setSelectedType] = useState<string>("Residential Property");
    const [active, setActive] = useState<string>("Residential Property")
    return (
        <section className="bestRealEstateDealsSection marginBottom paddingLeftRight">
            <TitleSection title="Best Real Estate Deals"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
            />
            <div className="filter">
                {filters?.map((filter, index) => {
                    return(
                        <p key={index} className={active == `${filter}` ? "filterText active" : "filterText"} onClick={() => {
                            setSelectedType(`${filter}`)
                            setActive(`${filter}`)
                        }}>
                        {filter}
                        </p>
                    )
                })}
            </div>
            <div className="cardsGallery">
                {CardRealEstateData?.filter((data) => selectedType === "" || data.type === selectedType)?.map((card, index) => {
                    return(
                        <CardRealEstate key={index}
                                    img={card.img}
                                    text={card.text}
                                    span={card.span}
                        />
                    )
                })} 
            </div>
        </section>
    )
}

export default BestRealEstateDeals
