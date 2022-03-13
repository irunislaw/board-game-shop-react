import React from "react";
import {Grid,Typography} from "@material-ui/core";
import Carousel from 'react-elastic-carousel'
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return(
<main className={classes.content}>
    <div className="{classes.toolbar}"></div>
    <Grid container justify="center" spacing={4}>
    {products.map((product) =>( 
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
        </Grid>
    ))}
    {/*<Carousel itemsToShow={1}>
    {products.map((product) =>( 
        <Typography>{product.name}</Typography>
    ))}
    </Carousel>*/}
    </Grid>
</main>
    );
 
}
export default Products;
