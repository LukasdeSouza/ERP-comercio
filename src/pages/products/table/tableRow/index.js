import { IconButton, Stack, TableCell, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

const TableRowProducts = ({ rows, onClickEdit }) => {

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {rows.map((row) => (
        <Stack direction={'row'}>
          <TableCell component="th" scope="row">
            {row.product}
          </TableCell>
          <TableCell align="left" width={400}>{row.quantity}</TableCell>
          <TableCell align="left">{row.value}</TableCell>
          <TableCell align="left">{row.unityValue}</TableCell>
          <TableCell align="left">
            <IconButton onClick={() => onClickEdit(row)}>
              <EditIcon />
            </IconButton>
          </TableCell>
        </Stack>
      ))}

    </TableRow>
  )
}

export default TableRowProducts