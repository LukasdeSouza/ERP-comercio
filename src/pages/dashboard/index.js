import React, { useContext, useEffect, useState } from 'react'
import MainPage from '../main'
import { Button, Divider, IconButton, Link, Slide, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import BarChart from '../../components/Charts/barChart'
import { Add } from '@mui/icons-material'
import FinancialController from '../../controllers/FinancialController';
import RootStoreContext from '../../rootStore';

const FinancialPage = () => {
  const { financialStore } = useContext(RootStoreContext)
  const controller = new FinancialController(financialStore)

  const navigate = useNavigate()
  const [slide, setSlide] = useState(false)

  const tableHead = ['Código', 'Valor', 'Favorecido', 'Tipo', 'Ações']
  const tableRow = financialStore.state.financialList

  const fetchList = () => {
    controller.fetchList()
  }

  const onClickEdit = (row) => {
    financialStore.setState('financial', row)
    navigate(`/financeiro/${row._id}`, { replace: true })
  }

  useEffect(() => {
    fetchList()
    setSlide(true)
  }, [])



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
          mb={2}>Entrada e Saída de Valores</Typography>
        <BarChart />
        <Divider />
        <Stack my={4}>
          <Typography
            fontFamily={'Poppins'}
            fontSize={18}>
            Lista de Entradas
          </Typography>
          <Table sx={{ minWidth: '100%', p: 2 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHead.map((head) => (
                  <TableCell sx={{ fontWeight: 600 }}>{head}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRow.map((row) => (
                <Slide direction='right' in={slide} mountOnEnter>
                  <TableRow>
                    <TableCell>
                      {row._id}
                    </TableCell>
                    <TableCell>
                      <Link href={`/financeiro/${row._id}`}>
                        R${row.value}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {row.toWho}
                    </TableCell>
                    <TableCell>
                      {row.type === 'ENTRY' ? "Entrada" : "Saída"}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => onClickEdit(row)}>
                        <MoreVertIcon color={'primary'} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </Slide>
              ))}
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </MainPage>
  )
}

export default FinancialPage 