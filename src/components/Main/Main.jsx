import React from 'react';
import "./style.css";
import losowanie from "../../assets/losowanie.svg"
import kostki from "../../assets/kostkiii.svg"
import licznik from "../../assets/licznik.svg"
const Main = () => {
  return (
    <div id="tlo">
        <div id="slider">
            <div id="strzalka-lewo">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg></div>
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




    </div>
  )
}

export default Main