import React, { useState, useEffect } from 'react';
import "./style.css";
import gra from "../../assets/gra.jpg"
import {Grid,Typography} from "@material-ui/core";
import gwiazdki from "../../assets/gwiazdki.svg"
const Filtry = ({products}) => {
    const przenoszenie=(id) => {
        return "/Produkt?id="+id+"";
    }





    return(

    
    <div id="tlo">
        {filproducts.map((product) =>( 
        
       
            <a href={przenoszenie(product.id)}><div id="produkt">
                <img src={product.image.url} id="zdjPro"></img><br></br>
                <a id="napis">{product.name}</a><br></br>
                <img src={gwiazdki} id="gwiazdki"></img><br></br>
                <a id="cenaaa">{product.price.formatted_with_symbol}</a>
            </div>
            </a>
        
        ))}
    </div>
    )
}

export default Filtry