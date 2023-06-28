import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableRowProducts from '../../pages/products/tableRow';



export default function BasicTable({ tableHead, tableRow, tableRowComponent, onClickEdit }) {

  return (
    <Table sx={{ minWidth: '100%', p: 2 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHead.map((head) => (
            <TableCell align='left' sx={{ fontWeight: 600 }}>{head}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableRowComponent}
        {/* <TableRowProducts
          row={tableRow}
          onClickEdit={() => onClickEdit(tableRow)}
        /> */}
      </TableBody>
    </Table>
  );
}