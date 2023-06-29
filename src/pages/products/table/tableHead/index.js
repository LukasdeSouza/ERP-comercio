import { TableCell, TableRow } from '@mui/material'
import React from 'react'

const TableHeadProducts = () => {
  return (
    <TableRow>
      <TableCell width={'100%'}>Código</TableCell>
      <TableCell width={300} minWidth={300}>Produto</TableCell>
      <TableCell width={200} minWidth={200}>Estoque</TableCell>
      <TableCell width={300} minWidth={300}>Valor Unitário</TableCell>
      <TableCell width={400} minWidth={400}>Valor Total</TableCell>
      <TableCell width={80} minWidth={80}>Ações</TableCell>
    </TableRow>
  )
}

export default TableHeadProducts