import React from 'react'
import RootLayout from '../../components/RootLayout'
import DataTable from '../../components/BasicTable'
import BasicTable from '../../components/BasicTable'
import { Typography } from '@mui/material'

const MainPage = () => {
  return (
    <RootLayout>
      <Typography
        fontWeight={600}
        fontSize={20}
        fontFamily={'poppins'}
        color={'#1976d2'}>
        Lista de Moradores
      </Typography>
      <BasicTable />
    </RootLayout>
  )
}

export default MainPage