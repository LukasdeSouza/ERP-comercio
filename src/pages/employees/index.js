import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'

const EmployeesPage = () => {
  const navigate = useNavigate()

  const onClickEdit = (row) => {
    navigate(`/funcionários/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Typography fontFamily={'Poppins'} mb={2}>Funcionários</Typography>
      <BasicTable onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default EmployeesPage