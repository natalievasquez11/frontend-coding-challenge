import { useEffect, useState } from 'react';
import './App.css';
import { fetchProducts, Product } from './client';
import ProductList from './components/ProductList';
import Search from './components/Search';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts().then(data => {
      setAllProducts(data);
      setProducts(data);
    }).catch(err => console.log(err))
  }, []);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
  <div className="App">
    <header>
      <h1>Jane</h1>
      <button className='cart-button' onClick={handleCartClick}>Cart ({cart.length})</button>
    </header>
    <div className='top-div'>
      {isCartOpen && <Cart cart={cart} setCart={setCart}/>}
      <Search products={products} setProducts={setProducts} allProducts={allProducts}/>
    </div>
    <ProductList products={products} setCart={setCart} cart={cart} />
  </div>
  );
}

export default App;
