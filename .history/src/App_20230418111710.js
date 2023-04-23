import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Cart/>
        <Home />
        <Footer />
      </Provider>
    </div>
  );
}
export default App;
