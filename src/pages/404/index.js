import { ArrowBack } from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <Stack alignItems={'center'} mt={10} spacing={4}>
      <Typography fontFamily={'Poppins'} fontSize={24}>Erro 404</Typography>
      <Typography fontFamily={'Poppins'} fontSize={14}>Página não Encontrada!</Typography>
      <Button
        variant='contained'
        startIcon={<ArrowBack />}
        onClick={() => navigate('/dashboard')}>
        Voltar
      </Button>
    </Stack>
  )
}

export default Page404