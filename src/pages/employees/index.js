import React from 'react'
import MainPage from '../main'
import { Button, IconButton, Link, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import { Add } from '@mui/icons-material';

const EmployeesPage = () => {
  const navigate = useNavigate()

  const tableHead = ['Código', 'Nome', 'Função', 'Setor', 'Ações']
  const tableRow = [
    { code: '0001', fullName: 'Fernandinho da Costa', function: 'Programador', sector: 'T.I' },
    { code: '0002', fullName: 'Severino Barbosa', function: 'Designer', sector: 'T.I' },
    { code: '0003', fullName: 'Almondeguita da Silva', function: 'Faxineiro', sector: 'Limpeza' },
    { code: '0004', fullName: 'Narnino Borges', function: 'Financeiro', sector: 'Administrativo' },
    { code: '0005', fullName: 'Pabla Vittar', function: 'Cozinheiro', sector: 'Cozinha' },
    { code: '0006', fullName: 'Noguinsen Sapinoseb', function: 'Designer', sector: 'T.I' },
    { code: '0007', fullName: 'Silvinha Motorista', function: 'Motorista', sector: 'Administrativo' }
  ]

  const onClickEdit = (row) => {
    navigate(`/funcionários/${row.code}`, { replace: true })
  }

  return (
    <MainPage>
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography
          fontFamily={'Poppins'}
          fontSize={18}
          color={"#1976d2"}>
          Lista de Funcionários
        </Typography>
        <Button
          variant='contained'
          onClick={() => navigate('novo')}
          startIcon={<Add />}>
          Novo Funcionário
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
                <Link href={`/funcionários/${row.code}`}>
                  {row.fullName}
                </Link>
              </TableCell>
              <TableCell>
                {row.function}
              </TableCell>
              <TableCell>
                {row.sector}
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

export default EmployeesPage