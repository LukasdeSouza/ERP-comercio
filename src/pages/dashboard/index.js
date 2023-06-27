import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'
import BarChart from '../../components/Charts/barChart'

const FinancialPage = () => {
  const navigate = useNavigate()
  const onClickEdit = (row) => {
    navigate(`/financeiro/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Typography fontFamily={'Poppins'} fontSize={18} mb={2}>Informações Financeiras</Typography>
      <Typography fontFamily={'Poppins'} fontSize={14} mb={2}>Entradas e Saídas de Valores</Typography>
      {/* <BasicTable onClickEdit={onClickEdit} /> */}
      <BarChart />
    </MainPage>
  )
}

export default FinancialPage