import React, { useEffect, useState } from 'react';
import { Product } from '../client';
import './productList.css';

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList = ({products}: Props) => {



  return (
    <div className='product-list'>
        {products.map(prod => (
          <div key ={prod.product_id} className='product-list-item'>
            <img src={prod.image_urls.toString()} alt='' />
            <span>
              <p className='item-kind'>{prod.kind}</p>
              <p className='item-name'>{prod.name}</p>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </span>
          </div>
        ))}
    </div>
  )
};

export default ProductList;