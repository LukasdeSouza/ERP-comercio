import React from 'react'
import RootLayout from '../../components/RootLayout'
import DataTable from '../../components/BasicTable'
import BasicTable from '../../components/BasicTable'
import { Typography } from '@mui/material'

const MainPage = ({ children }) => {

  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}

export default MainPage