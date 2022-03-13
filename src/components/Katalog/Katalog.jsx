import React, { useState, useEffect } from 'react';
import "./style.css";
import gra from "../../assets/gra.jpg"
import {Grid,Typography} from "@material-ui/core";
import {commerce} from "../../lib/commerce";
import gwiazdki from "../../assets/gwiazdki.svg"
import { Router,useLocation } from 'react-router-dom';


const Katalog=({products})=>{
    const [filproducts, setfilProducts] = useState([]);
    const search = useLocation().search;
  const id = new URLSearchParams(search).get('querry');
 
  const handleFilter = async () => {
    
   
    const filtrowane  =await commerce.products.list({
        category_slug: id
    }); 
        setfilProducts(filtrowane);
        console.log('chujomucha');
        console.log(filproducts);
  };
 handleFilter();
    console.log(id);
    console.log(filproducts);

    const przenoszenie=(id) => {
        return "/Produkt?id="+id+"";
    }
    return(

    
    <div id="tlo">
         <Grid container justify="center" spacing={4}>
    {filproducts.data && filproducts.data.map((product) =>( 
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <a href={przenoszenie(product.id)}><div id="produkt">
                <img src={product.image.url} id="zdjPro"></img><br></br>
                <a id="napis">{product.name}</a><br></br>
                <img src={gwiazdki} id="gwiazdki"></img><br></br>
                <a id="cenaaa">{product.price.formatted_with_symbol}</a>
            </div>
            </a>
        </Grid>
    ))}
    </Grid>
        {/* {filproducts.data && filproducts.data.map((product) =>( 
        
       
            <a href={przenoszenie(product.id)}><div id="produkt">
                <img src={product.image.url} id="zdjPro"></img><br></br>
                <a id="napis">{product.name}</a><br></br>
                <img src={gwiazdki} id="gwiazdki"></img><br></br>
                <a id="cenaaa">{product.price.formatted_with_symbol}</a>
            </div>
            </a>
        
        ))} */}
    </div>
   
   
        

    )
}
export default Katalog