import React from 'react'
import MainPage from '../../main'
import { useNavigate, useParams } from 'react-router-dom'
import MainEditTitle from '../../../components/MainEditTitle'

const DashboardEditPage = () => {
  const id = useParams()

  return (
    <MainPage>
      <MainEditTitle route={'dashboard'} title={'Dashboard'} />
    </MainPage>
  )
}

export default DashboardEditPage