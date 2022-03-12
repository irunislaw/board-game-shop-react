import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/Nav';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Carousel } from 'react-responsive-carousel'
import slider from './components/slider/slider';
import kontakt from './assets/kontakt.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './main.css';
import Produkt from "./components/Produkt/Produkt";
 

const App = () => {
    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
    commerce.products.list().then((product) => console.log(product));
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
   
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
/*<Navbar total_items={cart.total_items} />*/
    return (
        <Router>
            <div>
                <Nav total_items={cart.total_items} />
              
               <Routes>
                    <Route exact path="/" element={<div>
                        {/* <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={3}
        id="slajdy"
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        
      </CarouselProvider> */}
     
                    <Products products={products} onAddToCart={handleAddToCart} /></div>}>
                       
                    </Route>
                   <Route path="/produkt*" element={<Produkt />}></Route>
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