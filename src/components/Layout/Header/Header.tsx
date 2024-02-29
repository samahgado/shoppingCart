import { Link } from "react-router-dom";
import "./Header.css";
import useCartStore from "../../../store/cart/CartStore";

function Header() {
  const { cart } = useCartStore((state) => state);
  const {totalQtyInCart } = useCartStore((state) => state);
  const {totalPriceOfCart} = useCartStore((state)=>state)
 
  return (
    <header className="header">
      <Link to="/" className="logo">
        <p>Watch Store</p>
      </Link>
      <div className="cart-details">toatal items: {totalQtyInCart(cart)} total price: {totalPriceOfCart(cart)}</div>
      <div className="header-cart">
        <Link to={"/cart"}>🛒</Link>{totalQtyInCart(cart)}
      </div>
    </header>
  );
}
export default Header;
