import React from 'react';
import './cart.css';
import { Product } from '../client'; 

type Props = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Cart = ({ cart, setCart }: Props) => {
  const handleRemoveCartItem = (index: number) => {
    setCart(cart.filter((item, i) => (
      index !== i
    )))
  }

  return (
    <div className='cart-div'>
      <h3>Cart</h3>
      <ul>
      {cart.length === 0 ? (<p>Cart is Empty</p>) : (
        cart.map((item, index) => (
          <li key={index} className='cart-list-item'>
            {item.name} - Quantity: 1
            <button className='remove-cart-item-btn' onClick={() => handleRemoveCartItem(index)}>X</button>
          </li>
        ))
      )}
      </ul> 
    </div>
  )
}

export default Cart;