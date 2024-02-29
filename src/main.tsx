import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./context/ProductsProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    
      <App />
    
  </ProductsProvider>
);
