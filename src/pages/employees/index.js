import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'

const EmployeesPage = () => {
  return (
    <MainPage>
      <Typography fontFamily={'Poppins'} mb={2}>Funcionários</Typography>
      <BasicTable />
    </MainPage>
  )
}

export default EmployeesPage