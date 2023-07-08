import React, { useContext, useEffect } from 'react'
import MainPage from '../../main'
import { useNavigate, useParams } from 'react-router-dom'
import MainEditTitle from '../../../components/MainEditTitle'
import RootStoreContext from '../../../rootStore'
import { InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import FinancialController from '../../../controllers/FinancialController'
import { useController, useForm } from 'react-hook-form'
import { Money, MoneyOutlined } from '@mui/icons-material'
import FooterEdit from '../../../components/FooterEdit'

const FinancialEditPage = ({ control, name }) => {
  const { financialStore } = useContext(RootStoreContext)
  const controller = new FinancialController(financialStore)
  const navigate = useNavigate()
  const financialID = useParams()

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      code: financialStore.state.financial._id,
      value: parseInt(financialStore.state.financial?.value),
      type: financialStore.state.financial.type === 'ENTRY' ?
        'Entrada de Valor' :
        'Saída de Valor',
      toWho: financialStore.state.financial.toWho,
    },
  })

  const navigateBack = () => {
    navigate('/financeiro', { replace: true })
  }

  console.log(register)

  const onSave = (data) => {
    console.log(data)
  }


  useEffect(() => {
    if (financialID.id !== 'novo') {
      controller.fetchListById(financialID.id)
    }
  }, [])

  return (
    <MainPage>
      <MainEditTitle route={'financeiro'} title={'Financeiro'} />
      <Stack
        component={'form'}
        width={'50%'}
        padding={4}
        spacing={1}
        onSubmit={handleSubmit(onSave)}>
        {financialID.id !== 'novo' &&
          <Stack>
            <Typography
              variant='caption'
              fontFamily={'Poppins'}
              fontWeight={400}>Código</Typography>
            <TextField
              size='small'
              disabled
              {...register("code")}
              sx={{ width: '50%' }}
            />
          </Stack>
        }
        <Stack>
          <Typography
            variant='caption'
            fontFamily={'Poppins'}
            fontWeight={400}>Valor</Typography>
          <TextField
            size='small'
            placeholder='Valor Recebido'
            type='number'
            {...register("value", { required: true })}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  R$
                </InputAdornment>
            }}
          />
        </Stack>
        <Stack>
          <Typography
            variant='caption'
            fontFamily={'Poppins'}
            fontWeight={400}
          >Tipo</Typography>
          <TextField
            size='small'
            placeholder='Entrada de Valor ou Saída de Valor'
            sx={{ width: '50%' }}
            {...register("type", { required: true })}
          />
        </Stack>
        <Stack>
          <Typography
            variant='caption'
            fontFamily={'Poppins'}
            fontWeight={400}>Favorecido</Typography>
          <TextField
            size='small'
            placeholder='Nome do Favorecido (Seja PJ ou PF)'
            {...register("toWho", { required: true })}
          />
        </Stack>
      </Stack>
      <FooterEdit onClickBack={navigateBack} onSave={onSave} />
    </MainPage>
  )
}

export default FinancialEditPage