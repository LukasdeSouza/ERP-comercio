import React, { useEffect, useState } from 'react'
import MainPage from '../main'
import { Button, Divider, IconButton, Link, Slide, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import BarChart from '../../components/Charts/barChart'
import { Add } from '@mui/icons-material'

const FinancialPage = () => {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(false)

  const tableHead = ['Código', 'Valor', 'Tipo', 'Favorecido', 'Ações']
  const tableRow = [
    { code: '4231241', value: '12.000', type: 'Entrada', toWho: 'Fernandez da Cunha Adv' },
    { code: '312314', value: '5.000', type: 'Entrada', toWho: 'Paralelepidedo Costa' },
    { code: '093182', value: '1.200', type: 'Saída', toWho: 'Nárnia Festas' }
  ]

  const onClickEdit = (row) => {
    navigate(`/financeiro/${row.code}`, { replace: true })
  }

  useEffect(() => {
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
          mb={2}>Entradas e Saídas de Valores</Typography>
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
                      {row.code}
                    </TableCell>
                    <TableCell>
                      <Link href={`/financeiro/${row.code}`}>
                        R${row.value}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {row.toWho}
                    </TableCell>
                    <TableCell>
                      {row.type}
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