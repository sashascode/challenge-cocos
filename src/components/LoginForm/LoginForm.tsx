import * as React from 'react';
import Box from '@mui/material/Box';
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
import LoginFormFooter from './LoginFormFooter';
import LoginFormHeader from './LoginFormHeader';
import LoginFormContent from './LoginFormContent';
import { UserCredential } from 'firebase/auth';

interface LoginFormProps {
    title: LoginFormType
}

const LoginForm: React.FC<LoginFormProps> = ({ title}) => {
    const dispatch = useDispatch();
    const [avatar, setAvatar] = React.useState('/avatars/fc_avatar1.webp'); // TODO: Mejorar values de avatar: hacer constantes para que sean consistentes

    const doLogin = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
            dispatch(
                logIn({
                    email: userAuth.user.email as string,
                    username: userAuth.user.displayName as string,
                    uid: userAuth.user.uid as string,
                    avatarUrl: userAuth.user.photoURL as string
                })
            )
        })
        .catch((err) => {
            console.log("Error in `doLogin`: ", err);
        })
    }

    const doRegister = (email: string, password: string, username: string) => {
        let userAuth: UserCredential;
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuthResult) => {
                userAuth = userAuthResult;
                return updateProfile(userAuth.user, {
                    displayName: username,
                    photoURL: avatar,
                });
            })
            .then(() => {
                dispatch(
                    logIn({
                        email: userAuth.user.email as string,
                        username: userAuth.user.displayName as string,
                        uid: userAuth.user.uid as string,
                        avatarUrl: userAuth.user.photoURL as string
                    })
                );
            })
            .catch((error) => {
                console.log('Error en `doRegister`: ', error);
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
            const username = data?.get('username') as string;
            doRegister(email, password, username);
        }
        
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <LoginFormHeader type={title}/>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <LoginFormContent type={title} setAvatar={setAvatar}/>
                    <LoginFormFooter type={title}/>  
                </Box>
            </Box>
        </Container>

    );
}

export default LoginForm;