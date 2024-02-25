import { Container, Stack, Typography,Link} from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import SocialLogo from '../../components/Section/Auth/SocialLogo'
import LoginForm from './LoginForm'

function Login() {
  return (
   <Container>
    <Stack spacing={2} mt={5}>
    <Typography variant='h5'>Login to ChatApp</Typography>
    <Stack direction={"row"} spacing={1}>
        <Typography variant='article'>New User ? </Typography>
        <Link to="/auth/register" component={RouterLink}>Create an account </Link>
    </Stack>
   <LoginForm />
    <SocialLogo />
    </Stack>
   </Container>
  )
}

export default Login