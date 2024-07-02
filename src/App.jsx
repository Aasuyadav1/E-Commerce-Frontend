import { useState } from "react";
import Layout from "./Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Singlecategory from "./Components/Singlecategory";
import Singleproduct from "./Components/Singleproduct";
import Shoppingcart from "./Components/Shoppingcart";
import Login from "./pages/Login";
import Createaccount from "./pages/Createaccount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shoppingCart" element={<Shoppingcart />} />
            <Route path="category/:name" element={<Singlecategory />} />
            <Route path="products/:id" element={<Singleproduct />} />
            <Route path="login" element={<Login />} />
            <Route path="createaccount" element={<Createaccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
