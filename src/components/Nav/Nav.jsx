import * as React from 'react';

import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Icon,Container,Avatar,Button,Tooltip,MenuItem} from '@material-ui/core';
import './Styles.css';
import logo from '../../assets/logo.png';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import konto from '../../assets/konto.png';
import koszyk from '../../assets/koszyk.png';
import lista_zyczen from '../../assets/lista_zyczen.png';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];






const Nav = () => {
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
    <AppBar position="static" id='appbar' color="#FFFFFF" >
      <Container maxWidth="xl" id='appbar'>
        <Toolbar disableGutters id='appbar'>
          
          
          
          

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



         
          <img src={logo} alt="" id='appbar1' />
            
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
              <TextField
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
      />







              </Box>
          </Box>                                            {/*koniec trybu duzy*/}

          
          <Box sx={{flexGrow: 1,
            position:'absolute',
            width:'800px',
            left: '50%',
            top:'100px',
              transform: 'translatex(-50%)',
              height: '40px',
            display: {xs:'none', md: 'none', lg: 'flex' }}}>
              <a id="a">Gry planszowe</a>
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
        
          <img src={konto} alt="" id='img'/>
           
            <img src={koszyk} alt=""id='img' />
            <img src={lista_zyczen} alt="" id='img2'/>
          
          
          
          
          
          
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