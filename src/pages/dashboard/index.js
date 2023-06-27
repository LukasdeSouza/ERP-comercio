import React from 'react'
import MainPage from '../main'
import { Button, Divider, Stack, Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'
import BarChart from '../../components/Charts/barChart'
import { Add } from '@mui/icons-material'

const FinancialPage = () => {
  const navigate = useNavigate()
  const onClickEdit = (row) => {
    navigate(`/financeiro/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Stack width={'100%'}>
        <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
          <Typography
            fontFamily={'Poppins'}
            fontSize={18}>
            Informações Financeiras
          </Typography>
          <Button
            variant='contained'
            onClick={() => navigate('novo')}
            startIcon={<Add />}>
            Nova Entrada
          </Button>
        </Stack>
        <Typography
          fontFamily={'Poppins'}
          fontSize={14}
          mb={2}>Entradas e Saídas de Valores</Typography>
        <BarChart />
        <Divider />
        <Stack my={4}>
          <Typography
            fontFamily={'Poppins'}
            fontSize={18}>
            Lista de Entradas
          </Typography>
          <BasicTable onClickEdit={onClickEdit} />
        </Stack>
      </Stack>
    </MainPage>
  )
}

export default FinancialPage