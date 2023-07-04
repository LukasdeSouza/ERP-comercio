import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MainPage from '../main'
import { Button, IconButton, Slide, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Add } from '@mui/icons-material'


const ClientsPage = () => {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(false)

  const tableHead = ['Código', 'Nome', 'Data', 'Setor', 'Ações']
  const tableRow = [
    { code: '0001', fullName: 'Fernandinho da Costa', date: '24/08/22', sector: 'T.I' },
    { code: '0002', fullName: 'Severino Barbosa', date: '05/05/23', sector: 'T.I' },
    { code: '0003', fullName: 'Almondeguita da Silva', date: '04/06/22', sector: 'Limpeza' },
    { code: '0004', fullName: 'Narnino Borges', date: '05/07/23', sector: 'Administrativo' },
    { code: '0005', fullName: 'Pabla Vittar', date: '12/10/2021', sector: 'Cozinha' },
    { code: '0006', fullName: 'Noguinsen Sapinoseb', date: '20/02/2020', sector: 'T.I' },
    { code: '0007', fullName: 'Silvinha Motorista', date: '15/05/2019', sector: 'Administrativo' }
  ]

  const onClickEdit = (row) => {
    navigate(`/clientes/${row.code}`, { replace: true })
  }

  useEffect(() => {
    setSlide(true)
  }, [])

  return (
    <MainPage>
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography
          fontFamily={'Poppins'}
          fontSize={18}
          color={"#1976d2"}>
          Lista de Clientes
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
            <Slide direction='right' in={slide} mountOnEnter>
              <TableRow data-aos="fade-in">
                <TableCell>
                  {row.code}
                </TableCell>
                <TableCell>
                  <Link href={`/clientes/${row.code}`}>
                    {row.fullName}
                  </Link>
                </TableCell>
                <TableCell>
                  {row.date}
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
            </Slide>
          ))}
        </TableBody>
      </Table>
    </MainPage>
  )
}

export default ClientsPage