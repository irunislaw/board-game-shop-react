import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from "../../assets/logo.png";
import useStyles from './styles';
import {Link, useLocation} from "react-router-dom"
const Navbar = ({total_items}) => {
  const classes = useStyles();
  const location = useLocation();

  return <div>
<AppBar position="fixed" className={classes.appBar} color="inherit">
    <Toolbar>
        <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="shopname" height="25px" className={classes.image} />
            nazwa firmy

        </Typography>
        <div className={classes.grow}/>
        {location.pathname === '/' && (
        <div className={classes.buttons}>
          
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={total_items} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          
          </div>)}
    </Toolbar>

</AppBar>
  </div>;
};

export default Navbar;

