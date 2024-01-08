import { Box, Button, FormControl, IconButton, InputAdornment, Slide, Stack, TextField, Tooltip, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RootStoreContext from '../../rootStore';
import LoginController from '../../controllers/LoginController';
import { observer } from 'mobx-react-lite';
import { Toaster } from 'react-hot-toast';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage = observer(() => {
  const navigate = useNavigate()
  const { loginStore } = useContext(RootStoreContext)
  const controller = new LoginController(loginStore)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [slide, setSlide] = useState(false)

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigateTo = () => {
    navigate('/splash')
  }
  const doLogin = async () => {
    await controller.fetchList(email, password, navigateTo)
  }

  useEffect(() => {
    setSlide(true)
  }, [])

  return (
    <Box
      component={'form'}
      onSubmit={doLogin}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#1976d2',
      }}>
      <Stack
        sx={{
          width: 'inherit',
          height: 'inherit',
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Slide direction='right' in={slide} mountOnEnter>
          <Stack
            p={3}
            boxShadow={6}
            borderRadius={2}
            height={280}
            minHeight={280}
            width={'23%'}
            minWidth={300}
            sx={{ backgroundColor: "#eee" }}
          >
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
              variant='caption'
              sx={{ mt: 2 }}>
              Faça Login com <b style={{ color: "#084f95" }}>email </b>e <b style={{ color: "#084f95" }}>senha</b> cadastrados
            </Typography>
            <Tooltip
              title={'👇 Digite seu e-mail cadastrado pelo Administrador'}
              placement='top-start'>
              <Box sx={{ mt: 2 }}>
                <Typography
                  fontFamily={'Poppins'}
                  fontSize={10}>
                  Email
                </Typography>
                <TextField
                  variant='outlined'
                  size='small'
                  value={email}
                  onKeyDown={(e) => e.key === 'Enter' && doLogin()}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: '100%' }} />
              </Box>
            </Tooltip>
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
                    <Tooltip
                      title={showPassword ? 'Ocultar Senha Digitada' : '👁️‍🗨️ Ver Senha Digitada'}
                      followCursor
                    >
                      <InputAdornment position="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{ cursor: 'pointer' }}>
                        {showPassword ?
                          <VisibilityOff sx={{ color: '#084f95' }} /> :
                          <Visibility sx={{ color: '#084f95' }} />}
                      </InputAdornment>
                    </Tooltip>
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
        </Slide>
        <Typography
          fontFamily={'Poppins'}
          fontSize={10}
          fontWeight={300}
          mt={2}
          color={'lightgrey'}>
          Todos os direitos reservados a <b>Firmby</b>
        </Typography>
      </Stack>
      <Toaster />
    </Box>
  )
}
)

export default LoginPage