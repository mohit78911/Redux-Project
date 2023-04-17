import React from 'react'
import ProductsCard from '../components/ProductsCard';
 function Home() {
  return (
    <div>
      <section id="home">
        <div className='container'>
          <div className='home_content'>
            {
              productsData.map((item)=>(
                <ProductsCard key={item.id}
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;