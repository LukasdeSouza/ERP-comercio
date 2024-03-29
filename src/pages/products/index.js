import React, { useEffect, useState } from 'react'
import MainPage from '../main'
import { Button, IconButton, Link, Slide, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Add } from '@mui/icons-material';

const ProductsPage = () => {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(false)

  const tableHead = ['Código', 'Produto', 'Estoque', 'Valor Unitário', 'Valor Total', 'Ações']
  const tableRow = [
    { code: '42343', product: 'Cenoura', quantity: 34, unityValue: 'R$0,55', value: 'R$64.93' },
    { code: '12314', product: 'Requeijão', quantity: 22, unityValue: 'R$4,90', value: 'R$88.93' },
    { code: '52342', product: 'Carne', quantity: 12, unityValue: 'R$32,48', value: 'R$96.93' }
  ]

  const onClickEdit = (row) => {
    navigate(`/produtos/${row.code}`)
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
          Lista de Produtos
        </Typography>
        <Button
          variant='contained'
          onClick={() => navigate('novo')}
          startIcon={<Add />}>
          Novo Produto
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
                  <Link href={`/produtos/${row.code}`}>
                    {row.product}
                  </Link>
                </TableCell>
                <TableCell>
                  {row.quantity}
                </TableCell>
                <TableCell>
                  {row.unityValue}
                </TableCell>
                <TableCell>
                  {row.value}
                </TableCell>
                <TableCell>
                  <IconButton onClick={onClickEdit}>
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

export default ProductsPage