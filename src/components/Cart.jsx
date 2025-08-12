import React, {useEffect, useState } from 'react'
import "./cart.css";


export const Cart = ({cart,setCart}) => {
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  })
  return (
    <>
    <h1 className="heading">Cart Product</h1>
    <div className="cart-container">
      {cart.map((Product) =>(
        <div className="cart-product" key={Product.id}>
        <div className="img">
          <img src={Product.pic} alt="image"/>
       
      <div className="cart-product-detail">
      <h3>{Product.name}</h3>
      <p>{Product.amt}</p>
      </div>
      </div>
      </div>
      )) 

      }
    
     
          
    
           
  
          
        </div>
        
       
    <h1 className="amt">Total Amount Rs:{total}</h1>
    </>
  );
};
