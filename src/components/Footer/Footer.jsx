import React from 'react'
import kontakt from '../../assets/kontakt.png'
import useStyles from './styles';
const Footer = () => {
    const classes = useStyles();
    return (
   
<footer className={classes.footer}>
    <div className={classes.klasa}>
        <div className={classes.div}>
            <ul type="none">
                <li className={classes.li}><b>Zamówienia</b></li>
                <li className={classes.li}>Dostawa</li>
                <li className={classes.li}>Raty</li>
                <li className={classes.li}>Sposoby płatności</li>
                <li className={classes.li}>Zwroty i reklamacje</li>
            </ul>  
        </div>
        <div className={classes.div}>
            <ul type="none">
                <li className={classes.li}><b>Przydatne linki</b></li>
                <li className={classes.li}>Karty podarunkowe</li>
                <li className={classes.li}>Promocje</li>
                <li className={classes.li}>Wyprzedaż</li>
                <li className={classes.li}>Ten gorący strzał</li>
                <li className={classes.li}>Aktualności</li>
            </ul>
        </div>
        <div className={classes.div}>
            <ul type="none">
                <li className={classes.li}><b>Nazwa firmy</b></li>
                <li className={classes.li}>O nas</li>
                <li className={classes.li}>Newsletter</li>
                <li className={classes.li}>Opinie klientów</li>
                <li className={classes.li}>Regulamin</li>
                <li className={classes.li}>Polityka prywatności</li>
                <li className={classes.li}>Oferta pracy</li>
            </ul>
        </div>
        <div className={classes.div}>
            <ul type="none">
                <li className={classes.li}><b>Kontakt</b></li>
                <li className={classes.li}><img src={kontakt} /></li>
            </ul>
        </div>
        </div>
    </footer>
      )
}

export default Footer