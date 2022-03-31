import { useEffect, useState } from 'react';
import './App.css';
import { fetchProducts, Product } from './client';
import ProductList from './components/ProductList';
import Search from './components/Search';
import Cart from './components/Cart';

const App = () => {
  let allProducts: Product[] = [];
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(data => {
      allProducts = data;
      setProducts(allProducts);
    })
  }, []);

  // {products.map(p => (
  //   console.log(p)
  // ))}

  return (
  <div className="App">
    <header>
      <h1>Jane</h1>
      <p>Cart</p>
    </header>
    <div className='top-div'>
      <Cart />
      <Search />
    </div>
    <ProductList products={products} setProducts={setProducts}/>
  </div>
  );
}

export default App;
