import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import './Header.css';
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} />
                    <span>Cajoneando</span>
                </Link>
            </div>
            <Nav />
        </header>
    );
};