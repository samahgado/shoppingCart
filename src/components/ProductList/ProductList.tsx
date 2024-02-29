import "./ProductList.css";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

type ProductListProps = {
  debouncedSearchValue: string;
};

const ProductList = ({ debouncedSearchValue }: ProductListProps) => {
  const { products } = useProducts();
  const filterdProducts = products.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  );

  const productsView = debouncedSearchValue ? filterdProducts : products;
  return (
    <div className="product-list">
      {productsView.map((product) => (
        <Product product={product} key={product.sku} />
      ))}
    </div>
  );
};

export default ProductList;
