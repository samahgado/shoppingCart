import "./CartPageComponent.css";
import Layout from "../../Layout/Layout";
import CartItem from "../CartItem/CartItem";

import useCartStore from "../../../store/cart/CartStore";

const CartPageComponent = () => {
  const { cart } = useCartStore((state) => state);
  const {totalQtyInCart } = useCartStore((state) => state);
  const {totalPriceOfCart} = useCartStore((state)=>state)
 

  
  

  return (
    <Layout>
      <div className="cart">
        {cart.map((item) => (
          <CartItem item={item} key={item.sku} />
        ))}
        <div className="cart-details">
           toatal items:{totalQtyInCart(cart)} 
          total price: {totalPriceOfCart(cart)}
        </div>
      </div>
    </Layout>
  );
};

export default CartPageComponent;
