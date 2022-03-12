import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import {Link} from "react-router-dom";

const Cart = ( {cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    console.log(cart);
    const classes = useStyles();
    
       
    
    const EmptyCart = () => {

        return (<Typography variant="subtitle1">You have no items in your shoping cart.
        <Link to="/" className={classes.link}>start adding some</Link>
        </Typography>);

    };

    const FilledCart = () => {

        return ( 
            <main className={classes.content} >
            <div className="{classes.toolbar}"></div>
        <Grid container  spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>            
                    <CartItem  item={item} 
                    handleUpdateCartQty={handleUpdateCartQty} 
                    handleRemoveFromCart={handleRemoveFromCart} />
                </Grid>
            ))}
        </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                 <Button className={classes.checkout}  size="large" type="button" variant="contained" color="Primary" onClick={()=>{window.location=cart.hosted_checkout_url }}>Checkout</Button>
                </div>
            </div>
        </main>
        )
    }

    if(!cart.line_items) return "Loading...";

    return (<div className={classes.tlo}>
        <Container id="tlokoszyk">
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shoping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>


    </div>
    )
};

export default Cart;



