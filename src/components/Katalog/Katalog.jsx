import React from "react";
import "./style.css";
import gra from "../../assets/gra.jpg"
import gwiazdki from "../../assets/gwiazdki.svg"
const Katalog=()=>{
    return(
        <div id="tlo">
            <div id="produkt">
                <img src={gra} id="zdjPro"></img><br></br>
                <a id="napis">Monopoly</a><br></br>
                <img src={gwiazdki} id="gwiazdki"></img><br></br>
                <a id="cenaaa">149,99zł</a>
            </div>
            <div id="produkt">
                <img src={gra} id="zdjPro"></img><br></br>
                <a id="napis">Monopoly</a><br></br>
                <img src={gwiazdki} id="gwiazdki"></img><br></br>
                <a id="cenaaa">149,99zł</a>
            </div>
        </div>
    )
}
export default Katalog