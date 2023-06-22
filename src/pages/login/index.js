import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import RootStoreContext from '../../rootStore';
import LoginController from '../../controllers/LoginController';
import { observer } from 'mobx-react-lite';

const LoginPage = observer(() => {
  const navigate = useNavigate()
  const { loginStore } = useContext(RootStoreContext)
  const controller = new LoginController(loginStore)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const doLogin = async () => {
    await controller.fetchList(email, password, navigate('/dashboard'))
  }

  return (
    <Box
      sx={{
        width: '95vw',
        height: '90vh',
      }}>
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Stack
          boxShadow={3}
          borderRadius={2}
          p={3}
          height={280}
          width={'23%'}
          spacing={2}>
          <Typography
            fontFamily={'Poppins'}
            textAlign={'center'}
            fontSize={20}>
            Login
          </Typography>
          <Typography
            fontFamily={'Poppins'}
            fontWeight={300}
            textAlign={'center'}
            variant='caption'>
            Faça Login com seu <b>e-mail </b>e <b>senha</b> cadastrados
          </Typography>
          <Box>
            <Typography
              fontFamily={'Poppins'}
              fontSize={10}>
              Email
            </Typography>
            <TextField
              variant='outlined'
              size='small'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: '100%' }} />
          </Box>
          <Box>
            <Typography
              fontFamily={'Poppins'}
              fontSize={10}>
              Senha
            </Typography>
            <TextField
              variant='outlined'
              size='small'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: '100%' }} />
          </Box>
          <LoadingButton
            variant='contained'
            loading={loginStore.loading}
            onClick={() => doLogin()}
            color='primary'
            sx={{ width: '100%', height: 40 }}>
            Entrar
          </LoadingButton>
        </Stack>
      </Stack>
    </Box>
  )
}
)

export default LoginPage