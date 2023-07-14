import { ArrowBack, Delete } from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const MainEditTitle = ({ route, title, onClickDelete }) => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <IconButton onClick={() => navigate(`/${route}`)}>
          <ArrowBack />
        </IconButton>
        <Typography fontFamily={'Poppins'}>
          {params.id === 'novo' ? `Novo ${title}` : `Editar ${title}`}
        </Typography>
      </Stack>
      {params.id !== 'novo' &&
        < Button
          variant='contained'
          startIcon={<Delete />}
          onClick={onClickDelete}
          sx={{ fontFamily: "Poppins", fontWeight: 300, background: '#dd3d3d' }}>
          Apagar Registro
        </Button>
      }
    </Stack >
  )
}

export default MainEditTitle