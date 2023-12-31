import './CartWidget.css';
import { useCartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";


function CartWidget() {
    const { totalProductos} = useCartContext();
    const itemCount = totalProductos() || 0;
    return (
        <Link to='/cart'>
            <div className="icons">
                <button>
                    <i className="material-symbols-outlined">
                        shopping_bag
                    </i>
                    <span className="contador-item">{itemCount}</span>
                </button>
            </div>
        </Link>
    )
}
export default CartWidget;

