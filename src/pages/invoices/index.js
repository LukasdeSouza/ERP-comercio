import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'

const InvoicesPage = () => {
  return (
    <MainPage>
      <Typography
        fontFamily={'Poppins'}
        fontWeight={400}
      >
        Faturas
      </Typography>
      <BasicTable />
    </MainPage>
  )
}

export default InvoicesPage