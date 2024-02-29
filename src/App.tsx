import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { lazy,Suspense } from "react";
const Cart = lazy(()=>import("./pages/Cart")  )

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Suspense fallback="loading cart"><Cart /></Suspense>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
