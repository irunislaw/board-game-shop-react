import React, { useState, useEffect } from 'react';
import {Badge} from '@material-ui/core';
import {Heart} from 'akar-icons' ;
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Icon,Container,Avatar,Button,Tooltip,MenuItem} from '@material-ui/core';
import './Styles.css';
import logo from '../../assets/logo.png';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import konto from '../../assets/konto.png';
import koszyk from '../../assets/koszyk.png';
import lista_zyczen from '../../assets/lista_zyczen.png';
import {Link, useLocation} from "react-router-dom";
import { commerce } from '../../lib/commerce';


    

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const przekaznik= (id) =>{
  return "/produkt?id="+id+"";
}



const Nav = ({total_items}) => {
  const [filproducts, setfilProducts] = useState([]);
   

  
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = async (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const filtrowane  =await commerce.products.list({
        query: searchWord
    });
    
    

    if (searchWord === "") {
      setfilProducts([]);
    } else {
        var result = [];
       
        setfilProducts(filtrowane);
        
        console.log(filproducts);
        console.log('siusiak');
        console.log(filproducts.data);
      
    }
  };

  const clearInput = () => {
    
    setWordEntered("");
  };
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    
    <AppBar position="static" id='appbar' color="#FFFFFF"  xs={{boxShadow:"none"}}>
      <Container maxWidth="xl" id='appbar' xs={{boxShadow:"none"}}>
        <Toolbar disableGutters id='appbar' xs={{boxShadow:"none"}}>
          
          
          
          

          <Box sx={{ flexGrow: 1, display: {xs:'flex', md: 'flex', lg: 'none' } }} id='appbar'>   {/*tryb telefon*/}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"

            >
              <Icon >
              <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"/>
                </Icon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs:'block', md: 'block', lg: 'none' },
              }}
            >
             
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Gry planszowe</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Gry karciane</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Gry figurkowe</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Podreczniki RPG</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Łamigłówki</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Akcesoria</Typography>
                </MenuItem>

                
            </Menu>
            <Box id="boks"
        
              >
              <TextField
        id="input-with-icon-textfield fullwidth"
        label="Szukaj"
       fullWidth
        sx={{ mx:"auto", width:"500px"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" height="20px" alt='zdj'/>
            </InputAdornment>
          ),
        
        }}
        variant="outlined"
      />
              </Box>
            
          </Box>                                                                    {/*koniec trybu telefon*/}
        
          <Typography
            variant="h6"
           
            
            sx={{  display: {xs:'flex', md: 'flex', lg: 'none' } }}          
          >                                                                             {/*tryb telefon*/}



         
         <a href="/"> <img  component={Link} to="/" src={logo} alt="" id='appbar1' /></a>
            
          </Typography>                                                                 {/* koniec tryb telefon*/}
          <Box sx={{ flexGrow: 1, display: {xs:'none', md: 'none', lg: 'flex' } }}>     {/*tryb duzy*/}
            
              {/* <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gry planszowe
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gry karciane
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gry figurkowe
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Podręczniki RPG
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Łamigłówki
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Akcesoria
              </Button> */}
              <Box

              sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translatex(-50%)',
              width: 500,
              maxWidth: '100%',
              top:"20px"
              }}
              >

      <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="szukaj"
          value={wordEntered}
          onChange={handleFilter}
        />
       
     {filproducts.length !== 0 && wordEntered !="" && (
      <div className="dataResult">
      {filproducts.data && filproducts.data.map((wynik) => (
        
          
            <a id="propozycje" href={przekaznik(wynik.id)}  > <p>{wynik.name} {wynik.price.formatted_with_symbol} </p></a>
      ))
    }
    </div>  
     )} </div>
     
    </div>
                {/* <Searchbar id="fullwidth" data={total_items}></Searchbar> */}
              {/* <TextField
        id="input-with-icon-textfield fullwidth"
        label="Szukaj"
       fullWidth
      
       
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" height="20px" alt='zdj'/>
            </InputAdornment>
          ),
        
        }}
        variant="outlined"
      /> */}







              </Box>
          </Box>                                            {/*koniec trybu duzy*/}

          
          <Box sx={{flexGrow: 1,
            position:'absolute',
            width:'800px',
            left: '50%',
            top:'100px',
            zIndex:-1,
              transform: 'translatex(-50%)',
              height: '40px',
            display: {xs:'none', md: 'none', lg: 'flex' }}}>
              <a id="a" href="/Katalog?querry=gry-planszowe">Gry planszowe</a>
              <div id='kreska' />
              <a id="a">Gry karciane</a>
              <div id='kreska' />
              <a id="a">Gry figurkowe</a>
              <div id='kreska' />
              <a id="a">Podręczniki RPG</a>
              <div id='kreska' />
              <a id="a">Łamigłówki</a>
              <div id='kreska' />
              <a id="a">Akcesoria</a>
              





          </Box>
          <svg xmlns="http://www.w3.org/2000/svg" id="img" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Heart"><path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z"/></svg>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={total_items} color="secondary">
            <svg xmlns="http://www.w3.org/2000/svg"id="img" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Cart"><path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7z"/><path d="M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2"/><path d="M8 21h2"/><path d="M16 21h2"/></svg>
            </Badge>
          </IconButton>
        
        
          
<svg xmlns="http://www.w3.org/2000/svg"id="img" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Person"><circle cx="12" cy="7" r="5"/><path d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"/></svg>
          
          
          
          
          
          
          <Box sx={{ flexGrow: 0 }}>
           
            
              







            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;