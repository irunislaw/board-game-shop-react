import React from "react";
import "./style.css";
import fb from "../../assets/facebook.png"
import twt from "../../assets/twitter.png"
import gg from "../../assets/google-plus.png"
const Login=()=>{
    return(
        <div id="tlo">
            <div id="login">
                <a id="logNap">Logowanie</a>
                <div id="wpisuj">Login/E-mail</div>
                <div id="wpisuj">Hasło</div>
                <input type="button" value="Zaloguj się" id="btnn"></input>
                <div id="nie">Nie masz jeszcze konta? <a id="zar" href="/register">Zarejestruj się</a> już dziś!</div>
                <hr></hr>
                <div id="albo">Albo zaloguj się za pomocą</div>
                <div id="fb">
                    <img src={fb} id="fbImg"></img>
                    <div id="fbText">Login with Facebook</div>
                    </div>
                <div id="twitter">
                <img src={twt} id="twtImg"></img>
                    <div id="twtText">Login with Twitter</div>
                    </div>
                <div id="mail">
                <img src={gg} id="ggImg"></img>
                    <div id="ggText">Login with Google+</div>
                    </div>
            </div>
        </div>
    )
}
export default Login