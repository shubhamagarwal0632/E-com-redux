import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectcartitem ,selectcarttotaprice } from '../redux/cartslice';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const cartitem = useSelector(selectcartitem);
  const carttotalprice = useSelector(selectcarttotaprice);
  return (
    <>
    <div className="navbar px-5 bg-black text-white">
        <Link to={'/'} style={{textDecoration:'none' ,color:'white'}} className="left"><h4>Redux-toolkit</h4></Link>
        <div className="mid">
            <button className='btn btn-warning'>Cart Item Total Price = {carttotalprice} ₹</button>
        </div>
        <Link to={'/cart'} className="right">
        <button type="button" className="btn btn-primary position-relative">
        <FaShoppingCart />

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartitem.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
    </div>
    </>
  )
}
