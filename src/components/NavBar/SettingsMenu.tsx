import { MouseEvent } from 'react';
import { Typography, Menu, MenuItem } from '@mui/material'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface SettingsMenuProps {
    anchorEl: null | HTMLElement;
    handleClose: (event: MouseEvent<HTMLElement>) => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ anchorEl, handleClose }) => (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleClose}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
);