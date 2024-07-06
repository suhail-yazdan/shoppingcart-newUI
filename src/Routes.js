import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css';
import MyAccount from './pages/MyAccount';
import Cart from './components/Cart'

const AppRoutes = () => {
    const [displayCart, setDisplayCart] = useState(false);
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

    return (
        <>
            <header>
                <Cart 
                showCart={displayCart} 
                setShowCart={() => setDisplayCart(!displayCart)}
                products={products}
                />    
            </header>

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/account" element={<MyAccount />} />
            </Routes>
        </>
    )
};

export default AppRoutes;