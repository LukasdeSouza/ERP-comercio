import { CircularProgress, Grow, Slide, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SplashScreenPage = () => {
  const navigate = useNavigate()
  const [splash, setSplash] = useState(false)

  const goToFinancialPage = () => {
    navigate('/financeiro')
  }

  useEffect(() => {
    setSplash(true)
    setTimeout(() => {
      goToFinancialPage()
    }, 2000)
  }, [])

  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
      width={'100%'}
      spacing={2}
      sx={{ backgroundColor: '#1976d2' }}>
      <Grow in={splash}>
        <Typography
          fontFamily={'Poppins'}
          fontWeight={500}
          fontSize={28}
          color={'#fff'}>
          Meu ERP - Serviços
        </Typography>
      </Grow>
      <Slide in={splash} direction='right' mountOnEnter>
        <CircularProgress sx={{ color: '#ddd' }} />
      </Slide>
    </Stack>

  )
}

export default SplashScreenPage