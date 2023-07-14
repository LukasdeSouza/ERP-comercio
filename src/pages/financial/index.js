import React, { useContext, useEffect, useState } from 'react'
import MainPage from '../main'
import { Button, CircularProgress, Divider, IconButton, Link, Skeleton, Slide, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import BarChart from '../../components/Charts/barChart'
import { Add } from '@mui/icons-material'
import FinancialController from '../../controllers/FinancialController';
import RootStoreContext from '../../rootStore';
import { observer } from 'mobx-react-lite';

const FinancialPage = observer(() => {
  const { financialStore } = useContext(RootStoreContext)
  const controller = new FinancialController(financialStore)

  const navigate = useNavigate()
  const [slide, setSlide] = useState(false)

  const fetchList = async () => {
    await controller.fetchList()
  }

  const tableHead = ['Código', 'Valor', 'Favorecido', 'Tipo', 'Ações']
  const tableRow = financialStore.state.financialList

  const onClickNewRegister = () => {
    financialStore.setState('financial', {})
    navigate('novo')
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
            onClick={onClickNewRegister}
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
                  {financialStore.loading ?
                    <TableRow sx={{ width: '100%' }}>
                      <Skeleton height={40} />
                    </TableRow> :
                    <TableRow
                      onClick={() => onClickEdit(row)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          background: '#f4f9ff',
                          transition: 'all ease 0.4s'
                        }
                      }}>
                      <TableCell>
                        {row._id}
                      </TableCell>
                      <TableCell>
                        R${row.value}
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
                  }
                </Slide>
              ))}
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </MainPage>
  )
}
)

export default FinancialPage 