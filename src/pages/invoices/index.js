import React from 'react'
import MainPage from '../main'
import { Typography } from '@mui/material'
import BasicTable from '../../components/BasicTable'
import { useNavigate } from 'react-router-dom'

const InvoicesPage = () => {
  const navigate = useNavigate()

  const onClickEdit = (row) => {
    navigate(`/faturas/${row.code}`)
  }

  return (
    <MainPage>
      <Typography
        fontFamily={'Poppins'}
        fontWeight={400}>
        Faturas
      </Typography>
      <BasicTable onClickEdit={onClickEdit} />
    </MainPage>
  )
}

export default InvoicesPage