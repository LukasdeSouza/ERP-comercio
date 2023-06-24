import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
  const navigate = useNavigate()

  const onClickEdit = (row) => {
    navigate(`/produtos/${row.code}`)
  }

  return (
    <MainPage>
      <Typography fontFamily={'Poppins'} mb={2}>Produtos Cadastrados</Typography>
      <BasicTable onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default ProductsPage