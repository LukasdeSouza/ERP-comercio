import React, { useContext, useEffect } from 'react'
import MainPage from '../../main'
import { useNavigate, useParams } from 'react-router-dom'
import MainEditTitle from '../../../components/MainEditTitle'
import RootStoreContext from '../../../rootStore'
import { InputAdornment, Stack, TextField, Typography } from '@mui/material'
import FinancialController from '../../../controllers/FinancialController'

import FooterEdit from '../../../components/FooterEdit'
import { observer } from 'mobx-react-lite'
import { Field, Formik } from 'formik'

const FinancialEditPage = observer(({ control, name }) => {
  const { financialStore } = useContext(RootStoreContext)
  const controller = new FinancialController(financialStore)
  const navigate = useNavigate()
  const financialID = useParams()

  const fetchById = async () => {
    await controller.fetchListById(financialID.id)
  }

  const navigateBack = () => {
    navigate('/financeiro', { replace: true })
  }

  console.log(financialID)

  const onSave = (values) => {
    if (financialID.id !== 'novo') {
      controller.onSaveEdit(values, navigateBack)
    } else {
      controller.onSave(values, navigateBack)
    }
  }

  const onClickDelete = () => {
    controller.onDelete(navigateBack)
  }


  useEffect(() => {
    fetchById()

    return (
      financialStore.setState('financial', {})
    )
  }, [])

  return (
    <MainPage>
      <MainEditTitle
        route={'financeiro'}
        title={'Financeiro'}
        onClickDelete={onClickDelete} />
      <Stack
        padding={4}
        spacing={1}
      >
        <Formik
          initialValues={{
            code: financialStore.state.financial?._id,
            value: financialStore.state.financial?.value,
            type: financialStore.state.financial?.type,
            toWho: financialStore.state.financial?.toWho,
          }}
          validate={values => {
            const errors = {};
            if (!values.value) {
              errors.value = 'Campo de Valores Obrigatório*';
            }
            if (!values.type) {
              errors.type = "Campo de Tipo é Obrigatório*"
            }
            if (!values.toWho) {
              errors.type = "Campo de Beneficiário é Obrigatório"
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSave(JSON.stringify(values))
          }}
        >
          {({ values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Stack component={'form'} onSubmit={handleSubmit} onKeyDown={(e) => e.key === "Enter" && handleSubmit()}>
              <Stack>
                {financialID.id !== 'novo' &&
                  <TextField
                    size='small'
                    name='code'
                    label='Código'
                    disabled
                    value={values.code}
                    sx={{ width: '25%', mb: 2 }}
                  />
                }
                <Stack sx={{ mb: 1 }}>
                  <TextField
                    size='small'
                    name='value'
                    label='Valor'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                    InputProps={{
                      startAdornment:
                        <InputAdornment position="start">
                          R$
                        </InputAdornment>
                    }}
                    sx={{ width: '40%' }}
                  />
                  <Typography variant='caption' my={0} py={0} color={'red'} sx={{ mb: 1 }}>
                    {errors.value && touched.value && errors.value}
                  </Typography>
                </Stack>
                <Stack sx={{ mb: 2 }}>
                  <TextField
                    size='small'
                    name='type'
                    label='Tipo'
                    placeholder='Entrada ou Saída de Valores'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                    sx={{ width: '30%' }}
                  />
                  <Typography variant='caption' my={0} py={0} color={'red'}>
                    {errors.type && touched.type && errors.type}
                  </Typography>
                </Stack>
                <TextField
                  size='small'
                  name='toWho'
                  label='Beneficiário'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.toWho}
                  sx={{ width: '50%' }}
                />
              </Stack>
              <FooterEdit onClickBack={navigateBack} onSave={handleSubmit} />
            </Stack>
          )}
        </Formik>
      </Stack>

    </MainPage>
  )
}
)

export default FinancialEditPage