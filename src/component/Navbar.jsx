import { useRef } from 'react';
import "../css/Navbar.css"
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar() {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <header>
            <h2>Luftphon</h2>
            <nav ref={navRef}>
                <Link to='/'>About</Link>
				<Link to='/concept'>Concept</Link>
				<Link to='/case'>Case</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>


            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    )
}

export default Navbar