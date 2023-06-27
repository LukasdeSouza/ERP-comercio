import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
  const navigate = useNavigate()
  const tableHead = ['Código', 'Produto', 'Estoque', 'Valor Unitário', 'Valor Total', 'Ações']
  const tableRow = [
    { code: '42343', product: 'Cenoura', quantity: 34, unityValue: 'R$0,55', value: 'R$64.93' },
    { code: '12314', product: 'Requeijão', quantity: 22, unityValue: 'R$4,90', value: 'R$88.93' },
    { code: '52342', product: 'Carne', quantity: 12, unityValue: 'R$32,48', value: 'R$96.93' }
  ]

  const onClickEdit = (row) => {
    navigate(`/produtos/${row.code}`)
  }

  return (
    <MainPage>
      <Typography fontFamily={'Poppins'} fontSize={18} mb={2}>
        Lista de Produtos
      </Typography>
      <BasicTable
        tableHead={tableHead}
        tableRow={tableRow}
        onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default ProductsPage