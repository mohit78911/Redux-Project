import React from 'react'
import {removeItem} from '../store/slice/cartSlice'
import {incrementItem} from "../store/slice/cartSlice"
import {decrementItem} from "../store/slice/cartSlice"
import { toggleCart } from '../store/slice/cartSlice'
import { useSelector,useDispatch } from 'react-redux' 
function Cart() {
  const {isCartOpen,cartItems} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = (close)=>{
    dispatch(toggleCart(close))
  }
  const handleRemove = (itemId)=>{
    dispatch()
  }
  return (
    <div>
      
    </div>
  )
}
export default Cart;