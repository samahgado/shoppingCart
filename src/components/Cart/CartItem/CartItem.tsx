import "./CartItem.css";
import { CartItemType } from "../../../store/cart/CartStore";
import useCartStore from "../../../store/cart/CartStore";
import { ChangeEvent, ReactElement } from "react";

type itemCartProps = {
  item: CartItemType;
};

const CartItem = ({ item }: itemCartProps) => {
  const { name, price, img, sku, qty } = item;

  const { removeFromCart } = useCartStore((state) => state);
  const { quantityofItem } = useCartStore((state) => state);
  const onRemoveFromCart = () => {
    removeFromCart(sku);
  };

  //handle select quanyity
  const highestQty: number = 20 > item.qty ? 20 : item.qty;
  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    quantityofItem(item.sku, Number(e.target.value));
  };
  return (
    <div className="cart__item">
      <img src={`${img}`} alt="watch" className="cart__img" />
      <div aria-label="Item Name">{name}</div>
      <div aria-label="Price Per Item">
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>
      <div className="cart-qty">
        <button>+</button>
        <span>{qty}</span>
        <button>_</button>
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>

       <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
              total: {item.qty * item.price}
            </div> 

      <button
        className="cart__button"
        aria-label="Remove Item From Cart"
        title="Remove Item From Cart"
        onClick={onRemoveFromCart}
      >
        ❌
      </button>
    </div>
  );
};

export default CartItem;
