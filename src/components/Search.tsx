import React, { useEffect, useState } from 'react';
import './search.css';
import { Product } from '../client';

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Search = ({ products, setProducts }: Props) => {
  const [searchInput, setSearchInput] = useState<string>('');
  let searchResults: Product[] = [];

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = (input) => {
      searchResults = products.filter(prod => {
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


        {/* <p>Current Products: {products.length}</p>
        <ul>
          {products.map(prod => (
            <li key ={prod.product_id} >
              Name: {prod.name}
              Desc: {prod.description}
            </li>
          ))}
        </ul>
        <p>Current SearchInput ({searchInput.length}): '{searchInput}'</p> */}


      </form>
    </div>
  )
}

export default Search;