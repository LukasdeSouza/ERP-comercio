import React, { useContext } from 'react'
import MainPage from '../../main'
import { IconButton, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import RootStoreContext from '../../../rootStore'
import CommerceController from '../../../controllers/CommerceController'

const CommmerceEditPage = () => {
  const id = useParams()
  const navigate = useNavigate()
  const { commerceStore } = useContext(RootStoreContext)
  const controller = new CommerceController(commerceStore)

  return (
    <MainPage>
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <IconButton onClick={() => navigate('/comercio')}>
          <ArrowBack />
        </IconButton>
        <Typography fontFamily={'Poppins'}>Editar Comércio</Typography>
      </Stack>
      <Typography>
        Produto: {commerceStore.state.commerce.name}
      </Typography>
    </MainPage>
  )
}

export default CommmerceEditPage