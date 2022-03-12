import React, { useState, useEffect } from 'react';

import "./Styles.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { commerce } from '../../../lib/commerce';

function SearchBar() {
    const [filproducts, setfilProducts] = useState([]);
   

  
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = async (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
    
    

    if (searchWord == null || searchWord==" " || searchWord=="") {
        setfilProducts([])
        console.log("")
    } else {
        
        const filtrowane  =await commerce.products.list({
            query: searchWord
        });
        var result = [];
        console.log("wpisane:"+searchWord);
        setfilProducts(filtrowane);
        console.log(filproducts);
        console.log('siusiak');
        console.log(filproducts.data);
      
    }
  };

  const clearInput = () => {
    
    setWordEntered("");
  };

  return (
      <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          
          value={wordEntered}
          onChange={handleFilter}
        />
       
      </div>
      <div className="dataResult">
      {filproducts.data && filproducts.data.map((wynik) => (
        
          
           <a> <p>{wynik.name} </p></a>
          
      ))
    }
    </div>
      
      
    </div>
      
    </>
  );
}

export default SearchBar;