import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'

const ProductsPage = () => {
  return (
    <MainPage>
      <Typography fontFamily={'Poppins'} mb={2}>Produtos Cadastrados</Typography>
      <BasicTable />
    </MainPage>
  )
}

export default ProductsPage