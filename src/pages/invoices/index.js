import React from 'react'
import MainPage from '../main'
import { IconButton, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'

const ContractsPage = () => {
  const navigate = useNavigate()

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

  const onClickEdit = (row) => {
    navigate(`/contratos/${row.code}`)
  }

  return (
    <MainPage>
      <Typography
        fontFamily={'Poppins'}
        fontSize={18}
        fontWeight={400}
        mb={2}>
        Lista de Contratos
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

export default ContractsPage