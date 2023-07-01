import React from 'react'
import MainPage from '../main'
import { Button, IconButton, Link, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';

const ExpensesPage = () => {
  const navigate = useNavigate()
  const tableHead = ['Código', 'Valor', 'Dt. de Cobrança', 'Destinatário', 'Ações']
  const tableRow = [
    { code: '42343', value: '1.300', date: '22/07/23', toWho: 'Mastro Postes' },
    { code: '12314', value: '700', date: '22/07/23', toWho: 'Auto Ligas' },
    { code: '52342', value: '75', date: '22/07/23', toWho: 'InterWebs Conexões' }
  ]

  const onClickEdit = (row) => {
    navigate(`/despesas/${row.code}`)
  }


  return (
    <MainPage>
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography
          fontFamily={'Poppins'}
          fontSize={18}
          color={"#1976d2"}>
          Lista de Despesas
        </Typography>
        <Button
          variant='contained'
          onClick={() => navigate('novo')}
          startIcon={<Add />}>
          Nova Despesa
        </Button>
      </Stack>
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
            <TableRow>
              <TableCell>
                {row.code}
              </TableCell>
              <TableCell>
                <Link href={`/despesas/${row.code}`}>
                  R${row.value}
                </Link>
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.toWho}
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onClickEdit(row)}>
                  <MoreVertIcon color={'primary'} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MainPage>
  )
}

export default ExpensesPage