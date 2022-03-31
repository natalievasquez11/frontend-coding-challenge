import React, { useEffect, useState } from 'react';
import { Product } from '../client';
import './productList.css';

type Props = {
  products: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
}

const ProductList = ({products, setCart, cart }: Props) => {
  return (
    <div className='product-list'>
        {products.map(prod => (
          <div key ={prod.product_id} className='product-list-item'>
            <img src={prod.image_urls.toString()} alt='' />
            <span>
              <p className='item-kind'>{prod.kind}</p>
              <p className='item-name'>{prod.name}</p>
              <button type='button' className='add-to-cart-btn' onClick={() => setCart([...cart, prod])}>Add to Cart</button>
            </span>
          </div>
        ))}
    </div>
  )
};

export default ProductList;