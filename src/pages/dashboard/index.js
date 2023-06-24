import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const navigate = useNavigate()
  const onClickEdit = (row) => {
    navigate(`/dashboard/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Typography fontFamily={'Poppins'}>Dashboard</Typography>
      <BasicTable onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default DashboardPage