import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Shopping from "./pages/Shopping/Shopping";
import Cart from "./pages/Cart/Cart";
import ShoppingProvider from "./context/ShoppingProvider";
import "./styles/App.css";

function App() {
  return (
    <HashRouter>
      <ShoppingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </ShoppingProvider>
    </HashRouter>
  );
}

export default App;
