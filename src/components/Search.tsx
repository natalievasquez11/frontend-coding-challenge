import React, { useEffect, useState } from 'react';
import './search.css';
import { Product } from '../client';

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  allProducts: Product[];
}

const Search = ({ products, setProducts, allProducts}: Props) => {
  const [searchInput, setSearchInput] = useState<string>('');
  let searchResults: Product[] = [];

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = (input) => {
      searchResults = allProducts.filter(prod => {
        if(prod.name.toLowerCase().includes(input.toLowerCase) || prod.description.toLowerCase().includes(input.toLowerCase())) {
          return prod;
        } 
      });
      setProducts(searchResults);
  }

  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput]);

  return (
    <div>
      <form>
        <input type='text' placeholder='Search' onChange={(e) => handleInputChange(e)}/>
      </form>
    </div>
  )
}

export default Search;