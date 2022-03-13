import React from "react";
import "./style.css";
import gra from "../../assets/gra.jpg"
const Koszyk=({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart})=>{
    const EmptyCart = () => {

        return (<h2>Masz pusty Koszyk
        <a href="/">Dodaj jakies produkty</a>
        </h2>);

    };
    const FilledCart = ()=>{
       return(
       <>
        {cart.line_items.map((item)=>(
                <div id="okienko">
                <img src={item.image.url} id="zdjGal"></img> 
                <div id="NazGry">{item.name}</div>
                <div id="ilosc"><button onClick={() =>handleUpdateCartQty(item.id,item.quantity - 1)}>-</button> &nbsp;{item.quantity}&nbsp; <button onClick={() =>handleUpdateCartQty(item.id,item.quantity + 1)}>+</button></div>
                <div id="cena">{item.line_total.formatted_with_symbol}</div>
                <div id="ikoDol">
                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="38" fill="none" viewBox="0 0 77 38">
                        <path stroke="#404040" stroke-width="3" d="M36.282 18.985l1.757.35c.178.037.359.052.54.048m0-4.073l-1.118-.559a1.943 1.943 0 01-.974-1.123l-.032-.094a1.646 1.646 0 011.163-2.118l.426-.106c.176-.044.355-.068.534-.073m0 4.073l1.118.559c.46.23.811.634.974 1.123l.031.094a1.646 1.646 0 01-1.162 2.118l-.427.106a2.445 2.445 0 01-.534.073m0-4.073v-4.073m0 4.073v4.073m2.297-7.747l-1.757-.352a2.45 2.45 0 00-.54-.047m0-1.248v1.248m0 8.146v1.162M9.007 19.75l-3.382-1.132 12.86-15.955 8.033 2.687a45.484 45.484 0 0020.814 1.901 45.485 45.485 0 0120.815 1.901l5.757 1.927-6.43 7.978m-58.467.693l4.651 1.556a45.483 45.483 0 0020.814 1.9 45.486 45.486 0 0120.816 1.902l5.757 1.926 6.43-7.977m-58.468.693l.002-.003m-.002.003l-6.428 7.975 8.033 2.688a45.485 45.485 0 0020.813 1.9 45.485 45.485 0 0120.816 1.902l5.757 1.926 12.86-15.955-3.384-1.13"/>
                    </svg>
                </div>
                <div id="zakup">Zakup</div>
            </div>
            ))}
            <div id="guzik">
                <input type="button" value="Kup wszystko" id="button" onClick={()=>{window.location=cart.hosted_checkout_url }}></input>
            </div>
        </>
       )}

    if(!cart.line_items) return "Loading...";
    return(
        <div id="tlo">
            
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            
            {/* <div id="okienko">
                <img src={gra} id="zdjGal"></img>
                <div id="NazGry">Monopoly</div>
                <div id="ilosc">- &nbsp;1&nbsp; +</div>
                <div id="cena">149,99zł</div>
                <div id="ikoDol">
                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="38" fill="none" viewBox="0 0 77 38">
                        <path stroke="#404040" stroke-width="3" d="M36.282 18.985l1.757.35c.178.037.359.052.54.048m0-4.073l-1.118-.559a1.943 1.943 0 01-.974-1.123l-.032-.094a1.646 1.646 0 011.163-2.118l.426-.106c.176-.044.355-.068.534-.073m0 4.073l1.118.559c.46.23.811.634.974 1.123l.031.094a1.646 1.646 0 01-1.162 2.118l-.427.106a2.445 2.445 0 01-.534.073m0-4.073v-4.073m0 4.073v4.073m2.297-7.747l-1.757-.352a2.45 2.45 0 00-.54-.047m0-1.248v1.248m0 8.146v1.162M9.007 19.75l-3.382-1.132 12.86-15.955 8.033 2.687a45.484 45.484 0 0020.814 1.901 45.485 45.485 0 0120.815 1.901l5.757 1.927-6.43 7.978m-58.467.693l4.651 1.556a45.483 45.483 0 0020.814 1.9 45.486 45.486 0 0120.816 1.902l5.757 1.926 6.43-7.977m-58.468.693l.002-.003m-.002.003l-6.428 7.975 8.033 2.688a45.485 45.485 0 0020.813 1.9 45.485 45.485 0 0120.816 1.902l5.757 1.926 12.86-15.955-3.384-1.13"/>
                    </svg>
                </div>
                <div id="zakup">Zakup</div>
            </div>
            <div id="okienko">
                <img src={gra} id="zdjGal"></img>
                <div id="NazGry">Monopoly</div>
                <div id="ilosc">- &nbsp;1&nbsp; +</div>
                <div id="cena">149,99zł</div>
                <div id="ikoDol">
                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="38" fill="none" viewBox="0 0 77 38">
                        <path stroke="#404040" stroke-width="3" d="M36.282 18.985l1.757.35c.178.037.359.052.54.048m0-4.073l-1.118-.559a1.943 1.943 0 01-.974-1.123l-.032-.094a1.646 1.646 0 011.163-2.118l.426-.106c.176-.044.355-.068.534-.073m0 4.073l1.118.559c.46.23.811.634.974 1.123l.031.094a1.646 1.646 0 01-1.162 2.118l-.427.106a2.445 2.445 0 01-.534.073m0-4.073v-4.073m0 4.073v4.073m2.297-7.747l-1.757-.352a2.45 2.45 0 00-.54-.047m0-1.248v1.248m0 8.146v1.162M9.007 19.75l-3.382-1.132 12.86-15.955 8.033 2.687a45.484 45.484 0 0020.814 1.901 45.485 45.485 0 0120.815 1.901l5.757 1.927-6.43 7.978m-58.467.693l4.651 1.556a45.483 45.483 0 0020.814 1.9 45.486 45.486 0 0120.816 1.902l5.757 1.926 6.43-7.977m-58.468.693l.002-.003m-.002.003l-6.428 7.975 8.033 2.688a45.485 45.485 0 0020.813 1.9 45.485 45.485 0 0120.816 1.902l5.757 1.926 12.86-15.955-3.384-1.13"/>
                    </svg>
                </div>
                <div id="zakup">Zakup</div>
            </div> */}
            
        </div>
    )
}
export default Koszyk