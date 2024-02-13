import { MouseEvent } from 'react';
import { Typography, Menu, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/authSlice';
import { auth } from '../../services/firebaseAPI'

interface SettingsMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ anchorEl, handleClose }) => {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logOut());
    auth.signOut();

    handleClose();
  }

  const settings = [
    {
      key: "Profile",
      action: handleClose
    },
    {
      key: "Account",
      action: handleClose
    },
    {
      key: "Dashboard",
      action: handleClose
    },
    {
      key: "Logout",
      action: doLogout
    },
  ]; //'Profile', 'Account', 'Dashboard', 'Logout'

  return(
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
        <MenuItem key={setting.key} onClick={setting.action}>
          <Typography textAlign="center">{setting.key}</Typography>
        </MenuItem>
      ))}
    </Menu>
  )
  
};