import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [token, setToken] = useState();
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const item = await commerce.cart.update(productId, {quantity})
        setCart(item.cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <Router>
            <div>
                <Navbar total_items={cart.total_items} />
               <Routes>
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />}>
                       
                    </Route>
                    <Route exact path="/cart" element={<Cart 
                    cart={cart} 
                    handleUpdateCartQty={handleUpdateCartQty} 
                    handleRemoveFromCart={handleRemoveFromCart} 
                    handleEmptyCart={handleEmptyCart}/>}></Route>  
                 </Routes>
                 <Footer />
            </div>
        </Router>
    )
}
export default App;