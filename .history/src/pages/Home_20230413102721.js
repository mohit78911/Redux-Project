import React from 'react'
 function Home() {
  return (
    <div>
      <section id="home">
        <div className='container'>
          <div className='home_content'>
            {
              productsData.map((item))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;