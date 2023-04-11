import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsCard from "./data/productData";
function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <ProductsCard></ProductsCard>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default App;
