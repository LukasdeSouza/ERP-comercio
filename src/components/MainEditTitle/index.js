import { ArrowBack } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const MainEditTitle = ({ route, title }) => {
  const navigate = useNavigate()

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={2}>
      <IconButton onClick={() => navigate(`/${route}`)}>
        <ArrowBack />
      </IconButton>
      <Typography fontFamily={'Poppins'}>Editar {title}</Typography>
    </Stack>
  )
}

export default MainEditTitle