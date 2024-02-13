import LoginForm from '@/components/LoginForm/LoginForm'
import { LoginFormType } from '@/types/LoginFormType'
import React from 'react'

const Register = () => {
  return (
    <LoginForm title={LoginFormType.SIGN_UP}/>
  )
}

export default Register;