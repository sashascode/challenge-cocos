import * as React from 'react';
import { AppBar, Toolbar, IconButton, Container, Avatar, Tooltip, Box } from '@mui/material'
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import GradeIcon from '@mui/icons-material/Grade';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import Link from 'next/link'
import { Page } from '@/types';
import { useCallback } from 'react';
import { PageButton } from './PageButton';
import { SettingsMenu } from './SettingsMenu';
import ResponsiveMenu from './ResponsiveMenu';

const SCROLL_THRESHOLD = 50;

const pages: Page[] = [
  {id: "btnHomeNavbar", name: 'Home', icon: HomeIcon, url: "/"}, 
  {id: "btnSearchNavbar", name: 'Search', icon: SearchIcon, url: "/search"}, 
  {id: "btnFavNavbar", name: 'Favorites', icon: GradeIcon, url: "/favorites"}
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > SCROLL_THRESHOLD;
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
  
  const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const handleOpenUserMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  return (
    <StyledAppBar position="sticky" scrolled={scrolled}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image src="https://cocos.capital/wp-content/uploads/Logo-Principal.svg"
              width={100}
              height={70.66}
              alt="Cocos Capital Logo"
            />
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <ResponsiveMenu pages={pages} handleClose={handleCloseNavMenu} handleOpen={handleOpenNavMenu} anchorEl={anchorElNav}/>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              pages.map((page) => (
                <PageButton key={page.id} page={page} handleClose={handleCloseNavMenu}/>
              ))
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User icon" src="/charlyicon.jpg" />
              </IconButton>
            </Tooltip>
            
            <SettingsMenu anchorEl={anchorElUser} handleClose={handleCloseUserMenu} />
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