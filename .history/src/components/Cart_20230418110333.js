import React from 'react'
import {removeItem} from '../store/slice/cartSlice'
import {incrementItem} from "../store/slice/cartSlice"
import {decrementItem} from "../store/slice/cartSlice"
import { toggleCart } from '../store/slice/cartSlice'
import { useSelector,useDispatch } from 'react-redux' 
function Cart() {
  const {isCartOpen,}
  const dispatch = useDispatch()
  return (
    <div>
      
    </div>
  )
}
export default Cart;