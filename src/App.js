import { useState } from 'react';
import './App.css';
import Card from "./components/Card";
import Cart from "./components/Cart";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyAccount from './pages/MyAccount';



function Home({products, handleQuantityIncreased, handleQuantityDecreased}) {
  return(
    <div>
      <nav>
        <div className="grid1200">
          <Navbar />
        </div>
      </nav>
      <main>
        <div className="grid1200">
          <small className='breadcrumb'><a href='#'>Gifts</a> <span>&gt;</span> <a href='#'>Juice</a> <span>&gt;</span> Organic</small>
          {products.map((product) => (
            <Card
              key={product.pid}
              productDetail={product}
              onQuantityIncreased={e => handleQuantityIncreased(product, e)}
              onQuantityDecreased={e => handleQuantityDecreased(product, e)}
            />
          ))}
        </div>
      </main>
    </div>
  )

}


function App() {
  const [displayCart, setDisplayCart] = useState(false);
  // const [cartProductsQty, setCartProductsQty] = useState(0)
  const [products, setProducts] = useState([
    {
      pid: 1,
      name: "Natural Organic Banana Juice",
      desc: "Finest Strawberries, Milk, Sugar",
      price: 69,
      flavour: "Banana",
      weight: "500 ml",
      size:"Small",
      country:"India",
      quantity: 0,
      src: "images/banana.png"
    },
    {
      pid: 2,
      name: "Natural Organic Grape Juice",
      desc: "Brownie with chocolate sauce topped with Vanilla Ice cream",
      price: 55,
      flavour: "Grape",
      weight: "500 ml",
      size:"Small",
      country:"India",
      quantity: 0,
      src: "images/grape.png"
    },
    {
      pid: 3,
      name: "Natural Organic Orange Juice",
      desc: "Nuts and Dates from the soils of Algeria",
      price: 50,
      flavour: "Orange",
      weight: "500 ml",
      size:"Small",
      country:"India",
      quantity: 0,
      src: "images/orange.png"
    }
  ])

  const handleQuantityIncreased = (prod, e) =>{
    e.stopPropagation();
    let sProducts = [...products];
    const ind = sProducts.indexOf(prod);
    if(sProducts[ind].quantity < 10) sProducts[ind].quantity++;
    setProducts(sProducts)
  }

  const handleQuantityDecreased = (prod, e) =>{
    e.stopPropagation();
    let sProducts = [...products];
    const ind = sProducts.indexOf(prod);
    if(sProducts[ind].quantity > 0) sProducts[ind].quantity--;
    setProducts(sProducts)
  }
  
  return (
    <BrowserRouter>
      <header>
        <div className="grid1200">
            <Cart 
              showCart={displayCart} 
              setShowCart={() => setDisplayCart(!displayCart)}
              products={products}
            />
            
        </div>
      </header>

      <Routes>
        <Route path="/" element={
          <Home 
            products={products} 
            handleQuantityIncreased={handleQuantityIncreased} 
            handleQuantityDecreased={handleQuantityDecreased} 
          />}
        />

        <Route path="/account" element={< MyAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
