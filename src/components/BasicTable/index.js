import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

function createData(code, name, quantity, price) {
  return { code, name, quantity, price };
}

const rows = [
  createData(83719283, 'Presunto', 6, 24),
  createData(312312314, 'Feijão', 9, 37),
  createData(73618271, 'Arroz', 16, 24),
  createData(9387129, 'Milho', 3, 67, 4.3),
  createData(37619723, 'Maçã', 16, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650, p: 2 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Código</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>Nome</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>Qt. em Estoque</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>Valor Unitário</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600 }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}