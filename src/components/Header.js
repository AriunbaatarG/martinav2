import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
function Header() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="heading">
            <Link to="/" > <h1>Martinaiden Demaj</h1></Link>
            <ul className = {click ? "nav-item active" : "nav-item"} >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link> </li>
                <li><Link to="/prints">Prints</Link></li>                    
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className ="menu-dropdown" onClick={handleClick}>
                {
                     click ?  (
                        <FaTimes size={20} style={{color: "black"}} />
                    ) : <FaBars size={20} style = {{color: "black"}} />
                }
            </div>
        </div>
    );
}

export default Header;