import React from 'react'
import MainPage from '../../main'
import { useNavigate, useParams } from 'react-router-dom'
import MainEditTitle from '../../../components/MainEditTitle'

const FinancialEditPage = () => {
  const id = useParams()

  return (
    <MainPage>
      <MainEditTitle route={'financeiro'} title={'Financeiro'} />
    </MainPage>
  )
}

export default FinancialEditPage