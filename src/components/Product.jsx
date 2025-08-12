import React from 'react'
import "./product.css";
export const Product = ({ Product,cart,setCart }) => {
  const name=Product.name.length>21?Product.name.
  substring(0,20)+"..":Product.name;
  const addcart=()=>{ 
    setCart([...cart,Product])
  };
  const removecart=()=>{
    setCart(cart.filter((c)=> c.id!==Product.id))
  };
  return (
    <div className='product'>
        <div className="img">
            <img src={Product.pic} alt={Product.name} />
        <div className="detail"> <h2>{name}</h2>
        <p>Price Rs:{Product.amt}</p>
        
        <p>Shop Name:{Product.shop}</p>
        {cart.includes(Product)?(
          <button className="btn" onClick={removecart}>Remove from Cart</button>
        ):<button onClick={addcart}>Add to cart</button>}
        
           
    </div>
        </div>
   
    </div>
   
    
  )
}
