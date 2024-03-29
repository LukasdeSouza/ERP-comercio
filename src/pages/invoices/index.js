import React, { useEffect, useState } from 'react'
import MainPage from '../main'
import { Button, IconButton, Link, Menu, MenuItem, Slide, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import { Add } from '@mui/icons-material';

const ContractsPage = () => {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

  const tableHead = ['Código', 'Nome', 'Valor', 'Cliente', 'Ações']
  const tableRow = [
    { code: '0001', name: 'CONTRATOS DE SERVIÇOS CONTÁBEIS', value: '12.000', sector: 'Marcelo da Costa' },
    { code: '0002', name: 'CONTRATOS DE SERVIÇOS ADMINISTRATIVOS', value: '50.000', sector: 'Ferragistas do Brunelo' },
    { code: '0003', name: 'CONTRATOS DE SERVIÇOS T.I', value: '5.000', sector: 'Limpezas e CIA' },
    { code: '0004', name: 'CONTRATOS DE SERVIÇOS LIMPEZA', value: '5.500', sector: 'Normativos de Cópia' },
    { code: '0005', name: 'CONTRATOS DE SERVIÇOS ADMINISTRATIVOS', value: '12.000', sector: 'Cozinha da Vóvó' },
    { code: '0006', name: 'CONTRATOS DE SERVIÇOS VENDAS', value: '2.000', sector: 'T.I dos Meninos' },
    { code: '0007', name: 'CONTRATOS DE SERVIÇOS MARKETING', value: '1.500', sector: 'Administrativo da Silva1s' }
  ]

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = Boolean(anchorEl);

  const onClickEdit = (row) => {
    navigate(`/contratos/${row.code}`)
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
          Lista de Contratos
        </Typography>
        <Button
          variant='contained'
          onClick={() => navigate('novo')}
          startIcon={<Add />}>
          Nova Entrada
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
              <TableRow>
                <TableCell>
                  {row.code}
                </TableCell>
                <TableCell>
                  <Link href={`/contratos/${row.code}`}>
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>
                  R${row.value}
                </TableCell>
                <TableCell>
                  {row.sector}
                </TableCell>
                <TableCell>
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon color={'primary'} />
                  </IconButton>
                </TableCell>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  sx={{ boxShadow: 'none !important' }}
                // MenuListProps={{
                //   'aria-labelledby': 'basic-button',
                // }}
                >
                  <MenuItem
                    onClick={() => onClickEdit(row)}
                    sx={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 300 }}>
                    Editar
                  </MenuItem>
                  <MenuItem
                    onClick={() => alert('Ainda sendo implementado')}
                    sx={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 300 }}>
                    Baixar
                  </MenuItem>
                </Menu>
              </TableRow>
            </Slide>
          ))}
        </TableBody>
      </Table>
    </MainPage>
  )
}

export default ContractsPage