import * as React from 'react';
import LoginForm from '@/components/LoginForm/LoginForm';
import { LoginFormType } from '@/types/LoginFormType';

export default function Login() {

    return (
        <LoginForm title={LoginFormType.SIGN_IN}/>
    );
}