import React from 'react'
import { IconButton, Typography, Menu, MenuItem } from '@mui/material'
import { Page } from '@/types';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import { MouseEvent } from 'react';

interface ResponsiveMenuProps {
    pages: Page[];
    handleOpen: (event: MouseEvent<HTMLElement>) => void;
    handleClose: (event: MouseEvent<HTMLElement>) => void;
    anchorEl: null | HTMLElement;
}
  

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({pages, handleClose, handleOpen, anchorEl}) => {
  return (
    <>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
            display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
                <Link key={page.id} href={page.url}>
                    <MenuItem onClick={handleClose}>
                    <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                </Link>
            ))}
        </Menu>
    </>
  )
}

export default ResponsiveMenu;