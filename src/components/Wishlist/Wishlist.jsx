import React from "react";
import "./style.css";
import gra from "../../assets/gra.jpg"
import serce from "../../assets/serce.svg"
const Wishlist=()=>{
    return(
        <div id="tlo">
            <div id="okno">
                <img src={gra} id="zdjGry"></img>
                <div id="Nazwa">Monopoly</div>
                <div id="cenaW">149,99zł</div>
                <div id="ikoSer">
                <img src={serce} id="zdjSer"></img>
                </div>
            </div>
            <div id="okno">
                <img src={gra} id="zdjGry"></img>
                <div id="Nazwa">Monopoly</div>
                <div id="cenaW">149,99zł</div>
                <div id="ikoSer">
                <img src={serce} id="zdjSer"></img>
                </div>
            </div>
        </div>
    )
}
export default Wishlist