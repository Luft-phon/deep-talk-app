import LightRayBackground from "../component/LightRayBackground"
import "../css/CasePage.css"
import Carousel from '../Reactbits/Carousel/Carousel'
function CasePage() {

    return (
        <div className="case-container">
            <LightRayBackground />
            <div className="carousel">
                <Carousel
                    baseWidth={300}
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </div>
    )
}

export default CasePage

