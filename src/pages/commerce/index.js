import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BasicTable from '../../components/BasicTable'
import MainPage from '../main'
import { useNavigate } from 'react-router-dom'
import RootStoreContext from '../../rootStore'
import CommerceController from '../../controllers/CommerceController'

const CommercePage = () => {
  const navigate = useNavigate()
  const { commerceStore } = useContext(RootStoreContext)
  const controller = new CommerceController(commerceStore)

  const onClickEdit = (row) => {
    commerceStore.setState('commerce', row)
    navigate(`/comercio/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Stack>
        <Typography
          fontWeight={600}
          fontSize={20}
          fontFamily={'poppins'}
          color={'#1976d2'}>
          Lista de Comércios
        </Typography>
        <BasicTable onClickEdit={onClickEdit} />
      </Stack>
    </MainPage>
  )
}

export default CommercePage