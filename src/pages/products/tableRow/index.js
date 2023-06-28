import { IconButton, TableCell, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

const TableRowProducts = ({ row, onClickEdit }) => {
  console.log(row)

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.product}
      </TableCell>
      <TableCell align="left">{row.quantity}</TableCell>
      <TableCell align="left">{row.value}</TableCell>
      <TableCell align="left">{row.unityValue}</TableCell>
      <TableCell align="left">
        <IconButton onClick={() => onClickEdit(row)}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default TableRowProducts