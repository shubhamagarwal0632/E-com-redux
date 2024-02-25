import React from 'react'
import { Cart } from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { releteditem } from '../redux/cartslice';

function MoreProduct() {
  const cartitem = useSelector(releteditem);
  const dispatch = useDispatch();
  return (  
    <>
    <Cart/>
    </>
  )
}

export default MoreProduct