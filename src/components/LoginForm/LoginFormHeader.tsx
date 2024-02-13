import React from 'react'
import { LoginFormType } from '@/types/LoginFormType'
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Typography from '@mui/material/Typography';

interface LoginFormHeaderProps {
    type: LoginFormType;
}

const LoginFormHeader: React.FC<LoginFormHeaderProps> = ({ type }) => {
  return (
    <>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {
                type == LoginFormType.SIGN_IN ?
                <LockOutlinedIcon /> :
                <AppRegistrationIcon />
            }
        </Avatar>
        <Typography component="h1" variant="h5">
            { type }
        </Typography>
    </>
  )
}

export default LoginFormHeader