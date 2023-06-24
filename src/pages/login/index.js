import { Box, Button, FormControl, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import RootStoreContext from '../../rootStore';
import LoginController from '../../controllers/LoginController';
import { observer } from 'mobx-react-lite';
import { Toaster } from 'react-hot-toast';
import { RemoveRedEye, Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage = observer(() => {
  const navigate = useNavigate()
  const { loginStore } = useContext(RootStoreContext)
  const controller = new LoginController(loginStore)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigateTo = () => {
    navigate('/dashboard')
  }
  const doLogin = async () => {
    await controller.fetchList(email, password, navigateTo)
  }

  return (
    <Box
      component={'form'}
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
        >
          <Typography
            fontFamily={'Poppins'}
            textAlign={'center'}
            fontSize={20}>
            Login ERP
          </Typography>
          <Typography
            fontFamily={'Poppins'}
            fontWeight={300}
            textAlign={'center'}
            variant='caption'
            sx={{ mt: 2 }}>
            Faça Login com <b style={{ color: "blue" }}>e-mail </b>e <b style={{ color: "blue" }}>senha</b> cadastrados
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography
              fontFamily={'Poppins'}
              fontSize={10}>
              Email
            </Typography>
            <TextField
              variant='outlined'
              type='email'
              size='small'
              value={email}
              onKeyDown={(e) => e.key === 'Enter' && doLogin()}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: '100%' }} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              fontFamily={'Poppins'}
              fontSize={10}>
              Senha
            </Typography>
            <TextField
              variant='outlined'
              type={showPassword ? 'text' : 'password'}
              size='small'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && doLogin()}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{ cursor: 'pointer' }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
              }}
              sx={{ width: '100%' }} />
          </Box>
          <LoadingButton
            variant='contained'
            loading={loginStore.loading}
            onClick={() => doLogin()}
            color='primary'
            sx={{ width: '100%', height: 40, my: 3 }}>
            Entrar
          </LoadingButton>
        </Stack>
      </Stack>
      <Toaster />
    </Box>
  )
}
)

export default LoginPage