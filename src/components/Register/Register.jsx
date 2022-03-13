import React from "react";
import "./style.css";
const Register=()=>{
    return(
        <div id="tlo">
            <div id="register">
                <a id="rejNap">Rejestracja</a>
                <div id="wpisac">Nazwa konta</div>
                <div id="wpisac">E-mail</div>
                <div id="wpisac">Hasło</div>
                <div id="wpisac">Powtórz hasło</div>
                <input type="button" value="Zarejestruj się" id="guzior"></input>
            </div>
        </div>
    )
}
export default Register