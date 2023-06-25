import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'

const FinancialPage = () => {
  const navigate = useNavigate()
  const onClickEdit = (row) => {
    navigate(`/financeiro/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Typography fontFamily={'Poppins'}>Financeiro</Typography>
      <BasicTable onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default FinancialPage