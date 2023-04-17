import React from "react";
import ProductsCard from "../components/ProductsCard";
import ProductsCard from "../data/productData";
function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {productsData.map((item) => (
              <ProductsCard key={item.id} {...item}></ProductsCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
