import { LoginFormType } from '@/types/LoginFormType'
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react'

interface LoginFormFooterProps {
    type: LoginFormType;
}

const LoginFormFooter: React.FC<LoginFormFooterProps> = ( {type} ) => {
  return (
    <>
        {
            type === LoginFormType.SIGN_IN ?
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
    </>
  )
}

export default LoginFormFooter