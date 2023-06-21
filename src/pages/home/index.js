import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Box>
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Stack boxShadow={3} p={3} height={'30%'} width={'25%'} spacing={2}>
          <Typography fontFamily={'Poppins'}>Login</Typography>
          <Box>
            <Typography fontFamily={'Poppins'} fontSize={10}>Email</Typography>
            <TextField variant='outlined'
              sx={{ width: '100%' }} />
          </Box>
          <Box>
            <Typography fontFamily={'Poppins'} fontSize={10}>Senha</Typography>
            <TextField variant='outlined'
              sx={{ width: '100%' }} />
          </Box>
          <Button variant='contained' color='primary'
            sx={{ width: '100%', height: 40 }}>
            Entrar
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomePage