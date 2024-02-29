import "./Product.css";
import { ProductType } from "../../context/ProductsProvider";
import useCartStore from "../../store/cart/CartStore";
import { CartItemType } from "../../store/cart/CartStore";
import ImageComponent from "../ImageComponent/ImageComponent";
import BlurryLoadingImage from "../ImageComponent/ImageComponent";

type ProductTypeProps = {
  product: ProductType | CartItemType;
};

const Product = ({ product }: ProductTypeProps) => {
  const { cart } = useCartStore((state) => state);
  const { addToCart } = useCartStore((state) => state);
  const handleAddToCart = () => {
    const itemExists = cart.find((item) => item.sku === product.sku);
    console.log(itemExists)
    itemExists
      ? addToCart({ ...itemExists }, product.sku)
      : addToCart({ ...product, qty: 1 }, product.sku);
  };

  return (
    <article className="product">
      {/* <img src={`${product.img}`} alt="ww" className="product__img" /> */}
     <ImageComponent src={`${product.img}`} alt={`${product.name}`}/>
      <div className="product__content">
        <p className="product__category">accessories</p>
        <h3 className="product__title">{product.name}</h3>
        <div className="flex-group">
          <p className="product__price">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <p className="product_original-price">
            <s>$130.0</s>
          </p>
        </div>
        <button className="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Product;
