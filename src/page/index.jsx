import { Link } from "react-router-dom";
import "../css/LandingPage.css"
import Threads from '../Reactbits/Threads/Threads';
function IndexPage() {
    return (
        <div className="landingPage-container">
            <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>

            <div className="landingPage-content">
                <div className="content-text">
                    <div className="content-text-title">
                        <p>Nothing to be confused with the</p>
                        <p>Deep Talk app</p>
                    </div>
                    <div className="content-text-description">Explore emotional depth with the one you love.</div>
                </div>
                <button className="content-btn">
                    <Link to='/concept'>Getting Start</Link>
                </button>
            </div>
            <div className="footer">
                © 2025 Deep Talk App. All rights reserved | Made by Luftphon
            </div>
        </div>
    )
}

export default IndexPage