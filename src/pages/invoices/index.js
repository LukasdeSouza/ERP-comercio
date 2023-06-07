import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'

const InvoicesPage = () => {
  return (
    <MainPage>
      <Typography
        fontFamily={'Poppins'}
        fontWeight={400}
        fontSize={14}>
        Faturas
      </Typography>
    </MainPage>
  )
}

export default InvoicesPage