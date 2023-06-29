import React from 'react'
import MainPage from '../main'
import { Button, Divider, Stack, Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'
import BarChart from '../../components/Charts/barChart'
import { Add } from '@mui/icons-material'

const FinancialPage = () => {
  const navigate = useNavigate()

  const tableHead = ['Produtos', 'Quantidade', 'Valor Unitário', 'Valor Total', 'Ações']
  const tableRow = [
    { product: 'Pão', quantity: 4, unityValue: 'R$1,55', value: 'R$6.93' },
    { product: 'Manteiga', quantity: 2, unityValue: 'R$8,90', value: 'R$16.93' },
    { product: 'Carne', quantity: 2, unityValue: 'R$28,48', value: 'R$56.93' }
  ]

  const onClickEdit = (row) => {
    navigate(`/financeiro/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Stack width={'100%'}>
        <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
          <Typography
            fontFamily={'Poppins'}
            fontSize={18}
            color={"#1976d2"}>
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
          <BasicTable
            tableHead={tableHead}
            tableRow={tableRow}
            onClickEdit={onClickEdit} />
        </Stack>
      </Stack>
    </MainPage>
  )
}

export default FinancialPage