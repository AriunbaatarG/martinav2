import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
function Portfolio() {
    return (
        <div>
            <Header/>
            <div className="portfolio-item">
            <ul>
                <li className="port-li">
                    <Link to="/event-photography">Event Photography</Link>
                </li>
                <li className="port-li">
                    <Link to="/editorial-photography">Editorial</Link>
                </li>
                <li className="port-li">
                    <Link to="/landscape-photography">Landscape</Link>
                </li>
            </ul>
            </div>
            <Footer/>
        </div>
    );
}

export default Portfolio;