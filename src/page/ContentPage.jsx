import "../css/ContentPage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import iceberg from '../photo/iceberg.jpg'
import beach from '../photo/beach.png'
import TrueFocusText from "../component/TrueFocus";
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'
import BlurSurfaceText from "../component/BlurText";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
function ContentPage() {
  return (
    <div className="content-container">
      <Parallax pages={2}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{
            backgroundImage: `url(${iceberg})`,
            backgroundSize: 'cover',
            zIndex: 1,
          }}
        />
        <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
          <div className="surface">
            <BlurSurfaceText text="Breaking the Ice"/>
            <p className="surface-content">Simple questions to start opening up – like the first step on ice.</p>
            <button className="btn">
              <Link to="/break-the-ice">View your question</Link>
            </button>
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={0.75} speed={0.5} style={{ zIndex: 2 }}>
          <div className='beneathText'>
            <TrueFocusText />
            <p className="surface-content">Once we get used to it, we begin to uncover hidden emotions, memories, and fears.</p>
            <button className="btn">
              <Link to="/beneath-the-surface">View your question</Link>
            </button>
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }}>
          <div className="deep">
            <Fade duration={2000} direction="down"><BlurSurfaceText text="The Depths Within"/></Fade>
            
            <p className="deep-content">Where values, hurts, hopes and true love emerge.</p>
            <button className="btn">
              <Link to="/the-deepest">View your question</Link>
            </button>
          </div>
          <SplashCursor />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ContentPage;
