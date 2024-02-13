import { LoginFormType } from '@/types/LoginFormType'
import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AvatarSelector from '../AvatarSelector/AvatarSelector';

interface LoginFormContentProps {
    type: LoginFormType,
    setAvatar: (newAvatar: string) => void,
}

const LoginFormContent: React.FC<LoginFormContentProps> = ({type, setAvatar}) => {
  return (
    <>
        {
            type == LoginFormType.SIGN_UP &&
            <>
                <AvatarSelector setAvatar={setAvatar} />
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                InputLabelProps={{ style: { color: "#ffffff" } }}
                />
            </>
        }

        <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        InputLabelProps={{ style: { color: "#ffffff" } }}
        />

        <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        color='primary'             
        InputLabelProps={{ style: { color: "#ffffff" } }}
        />

        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
            { type }
        </Button>
    </>
  )
}

export default LoginFormContent