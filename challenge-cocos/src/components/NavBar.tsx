import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import GradeIcon from '@mui/icons-material/Grade';

const pages = [
  {name: 'Home', icon: HomeIcon}, 
  {name: 'Search', icon: SearchIcon}, 
  {name: 'Favorites', icon: GradeIcon}
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type ResponsiveAppBarProps = {
  backgroundImage: string | null;
};

export const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    if (typeof window !== 'undefined') { 
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);  
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="sticky" scrolled={scrolled}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="https://cocos.capital/wp-content/uploads/Logo-Principal.svg"
            width={100}
            height={70.66}
            alt="Cocos Capital Logo"
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <StyledButton
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, ml: 4, color: 'white', display: 'block' }}
                >
                <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                    {React.createElement(page.icon, { sx: { mr: 1, fontSize:'18px' } })}
                    {page.name}
                </Box>
              </StyledButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/charlyicon.jpg" />
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
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

type StyledAppBarProps = {
  scrolled: boolean;
};

const StyledAppBar = styled(AppBar)<StyledAppBarProps>`
  && {
    transition: background-color 0.3s ease;
    background-color: ${(props) => (props.scrolled ? '#000' : 'transparent')};
    padding: 1rem;
    box-shadow: none;
    border-bottom: 1px solid #222026;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: transparent;
    transition: background-color 0.3s ease;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      height: 2px;
      width: 0;
      background: white;
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

