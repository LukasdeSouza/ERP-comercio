import { ArrowBack } from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import SVG404 from '../../assets/404-page-ls-software.svg'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <Stack
      alignItems={'center'}
      mt={10}
      spacing={4}>
      <img src={SVG404} alt='404Image' width={250} height={100} />
      <Typography
        fontFamily={'Poppins'}
        fontWeight={300}
        fontSize={14}
        textAlign={'center'}> <b>Desculpe!</b> <br /> Não conseguimos encontrar a página que você buscava</Typography>
      <Button
        variant='contained'
        startIcon={<ArrowBack />}
        onClick={() => navigate('/financeiro')}>
        Voltar para o Menu
      </Button>
    </Stack>
  )
}

export default Page404