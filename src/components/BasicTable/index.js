import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default function BasicTable({ tableHeadComponent, tableRowComponent }) {

  return (
    <Table sx={{ minWidth: '100%', p: 2 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHeadComponent}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableRowComponent}
      </TableBody>
    </Table>
  );
}