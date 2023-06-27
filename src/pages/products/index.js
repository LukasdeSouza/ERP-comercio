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
      <Typography fontFamily={'Poppins'} fontSize={18} mb={2}>
        Lista de Produtos
      </Typography>
      <BasicTable onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default ProductsPage