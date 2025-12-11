import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";
import ShoppingProvider from "./context/ShoppingProvider";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <ShoppingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </ShoppingProvider>
    </BrowserRouter>
  );
}

export default App;
