import { Stack, Typography } from '@mui/material'
import React from 'react'
import BasicTable from '../../components/BasicTable'
import MainPage from '../main'

const ResidentsPage = () => {
  return (
    <MainPage>
      <Stack>
        <Typography
          fontWeight={600}
          fontSize={20}
          fontFamily={'poppins'}
          color={'#1976d2'}>
          Lista de Moradores
        </Typography>
        <BasicTable />
      </Stack>
    </MainPage>
  )
}

export default ResidentsPage