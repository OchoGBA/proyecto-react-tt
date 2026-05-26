import { useCart } from "../../context/CartContext";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
    const { getTotalItem } = useCart();

    const totalItems = getTotalItem();
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>
                        Carrito
                        {totalItems > 0 && <span className="incart"> {totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};