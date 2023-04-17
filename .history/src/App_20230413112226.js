import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { Store } from "./store/store";
function App() {
  return (
    <div>
      <Provider store={Store}>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Home />
        <br />
        <br />
        <br />
        <Footer />
      </Provider>
    </div>
  );
}
export default App;
