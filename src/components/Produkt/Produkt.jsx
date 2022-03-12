import React,{useState, useEffect} from 'react'
import { commerce } from '../../lib/commerce';
import { Router,useLocation } from 'react-router-dom'
import "./style.css"
const Produkt = () => {
    const [filproducts, setfilProducts] = useState([]);
    const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
 
  const handleFilter = async () => {
    
   
    const filtrowane  =await commerce.products.list({
        query: id
    }); 
        setfilProducts(filtrowane);
        console.log('chujomucha');
        console.log(filproducts);
  };
 handleFilter();
    console.log(id);
    console.log(filproducts);
    return (


    <div id="tlo">
        <br></br><br></br>
      {filproducts.data && filproducts.data.map((wynik) => (
        
          
         <p>{wynik.name} {wynik.price.formatted_with_symbol} </p>
  ))}
    </div>
    
  )
}

export default Produkt