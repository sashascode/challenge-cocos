import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoginFormType } from '@/types/LoginFormType';
import {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from '../../services/firebaseAPI';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/features/authSlice';

interface LoginFormProps {
    title: LoginFormType
}

const LoginForm: React.FC<LoginFormProps> = ({ title}) => {
    const dispatch = useDispatch();

    const doLogin = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
            dispatch(
                logIn({
                    email: userAuth.user.email as string,
                    uid: userAuth.user.uid as string
                })
            )
        })
        .catch((err) => {
            console.log("Error in `doLogin`: ", err);
        })
    }

    const doRegister = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
        /*
        .then((userAuth) => {
            Update the newly created user with a display name and a picture
            updateProfile(userAuth.user, {
            displayName: name,
            photoURL: profilePic,
        })
        */
        .then((userAuth) => {
            dispatch(
                logIn({
                    email: userAuth.user.email as string,
                    uid: userAuth.user.uid as string
                })
            )
        })
        .catch((error) => {
            console.log('Error in `doRegister`: ', error);
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email =  data?.get('email') as string;
        const password = data?.get('password') as string;

        if(title === LoginFormType.SIGN_IN) {
            doLogin(email, password);
        } else {
            doRegister(email, password);
        }
        
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    { title }
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
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
                        { title }
                    </Button>

                    {
                        title === LoginFormType.SIGN_IN ?
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        :
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    }
                    
                </Box>
            </Box>
        </Container>

    );
}

export default LoginForm;