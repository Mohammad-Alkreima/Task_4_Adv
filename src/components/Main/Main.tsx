import HowItWork from '../HowItWork/HowItWork'
import FindDreamHomeSection from '../FindDreamHomeSection/FindDreamHomeSection'
import MostTrending from '../MostTrending/MostTrending'
import BestRealEstateDeals from '../BestRealEstateDeals/BestRealEstateDeals'

const Main = () => {
    return (
        <main>
            <HowItWork/>
            <FindDreamHomeSection/>
            <MostTrending/>
            <BestRealEstateDeals filters={["Residential Property", "Commercial Property", "Agriculture Property", "Industrial Property"]}
            />
        </main>
    )
}

export default Main
