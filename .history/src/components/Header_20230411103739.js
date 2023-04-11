import React from 'react'

 function Header() {
  return (
    <div>
      <header id="header">
        <div className='container'>
          <div className='navbar'>
            <h4>LogicRays</h4>
            <div className='nav_menu'>
              <div title='cart' className='cart_icon' onClick={()=>handleOpenCart(true)}>
                <img src='/images/bag/icon.svg' alt='bag-icon'/>
                <span clas

              </div>

            </div>
          </div>

        </div>

      </header>
    </div>
  )
}
export default Header;