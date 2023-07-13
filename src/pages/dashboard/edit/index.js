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


  const navigateBack = () => {
    navigate('/financeiro', { replace: true })
  }

  const onSubmit = async () => {
    // console.log(codeValue.fixedCosts)
    // await controller.onSave()
  };


  useEffect(() => {
    if (financialID.id !== 'novo') {
      controller.fetchListById(financialID.id)
    }

    return (
      financialStore.setState('financial', {})
    )
  }, [])

  return (
    <MainPage>
      <MainEditTitle route={'financeiro'} title={'Financeiro'} />
      <Stack
        padding={4}
        spacing={1}
      >
        <Formik
          initialValues={{
            code: financialStore.state.financial._id,
            value: parseInt(financialStore.state.financial?.value),
            type: financialStore.state.financial.type === 'ENTRY' ?
              'Entrada de Valor' :
              'Saída de Valor',
            toWho: financialStore.state.financial.toWho,
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
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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