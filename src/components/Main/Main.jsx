import React from 'react';
import "./style.css";
import losowanie from "../../assets/losowanie.svg"
import kostki from "../../assets/kostkiii.svg"
import licznik from "../../assets/licznik.svg"
import gwiazdki from "../../assets/gwiazdki.svg"
import gra from "../../assets/gra.jpg"

const Main = ({products}) => {
    const przelacznik = (id)=>{
        return "/Produkt?id="+id+"";
    }
  return (
    <div id="tlo1">
        <div id="slider">
            <div id="strzalka-lewo">
                <svg id="strzalka-lewo" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </div>
          <div id="strzalka-prawo">
              <svg id="strzalka-prawo" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
          </div>
        </div>
        <div id="hotShot">
            <div id="hotText">Gorący strzał</div>
            <img src={losowanie} id="losImg"></img>
            <img src={kostki} id="kosImg"></img>
            <div id="sup">
              Super oferta za:<br></br>
              <img src={licznik} id="liczImg"></img>
              </div>
        </div>
        <div id="Promocje">
          <div id="wypis">Promocje / hity tygodnia</div>
        </div>
        <div id="Promocje">
          <div id="wypis">Promocje / hity tygodnia</div>
        </div>
        <div id="nowosci">
          <div id="tytulNow">Nowości</div>
          <hr></hr>
          <div id="kontener">
            {products.slice(0,4).map((item) => (
                    <div id="nowPro">
                        <a href={przelacznik(item.id)} id="a">
                    <img src={item.image.url} id="zdjPro"></img><br></br>
                    <a id="napis">{item.name}</a><br></br>
                    <img src={gwiazdki} id="gwiazda"></img><br></br>
                    <a id="cenaaa">{item.price.formatted_with_symbol}</a>
                    </a>
                    </div>
            ))}
            
            
            {/* <div id="nowPro">
            <img src={gra} id="zdjPro"></img><br></br>
            <a id="napis">Monopoly</a><br></br>
            <img src={gwiazdki} id="gwiazda"></img><br></br>
            <a id="cenaaa">149,99zł</a>
            </div> */}
          </div>
          
        </div>
        
        



    </div>
  )
}

export default Main