import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { pages } from '../data/Data';



function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  // const idHomeTagetElement=document.getElementById("homepage")
  // const goHome=()=>{
  //   idHomeTagetElement.scrollIntoView({behavior:"smooth"})
  // }
  // const [anchorElUser, setAnchorElUser] = React.useState(false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };
  // const handleOpenUserMenu = () => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(!anchorElUser);
  // };

  return (
    <AppBar position="fixed"elevation={1} sx={{
      background:"#FFF"
    }}  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:"blue" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'blue',
              textDecoration: 'none',
            }}
            // onClick={()=>goHome()}
          >
            KALI ACADEMY
          </Typography>

          <Box sx={{ flexGrow: 1,  display: { xs: 'flex', md: 'none',color:"blue" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                background:"red",
                color:"#000",
                fontWeight:"bold"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                // onClick={handleCloseNavMenu}
               style={{
                color:"#000"
               }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none',color:"blue" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'blue',
              textDecoration: 'none',
              
            }}
          >
            KALI ACADEMY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:"center" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000', display: 'block',fontWeight:"bold" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {
            /*
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
              // onClick={handleOpenUserMenu}
               sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../images/icon.png" />
              </IconButton>
            </Tooltip>
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
            */
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;