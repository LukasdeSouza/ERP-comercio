import React, { useContext, useEffect, useState } from 'react'
import MainPage from '../../main'
import { useNavigate, useParams } from 'react-router-dom'
import MainEditTitle from '../../../components/MainEditTitle'
import RootStoreContext from '../../../rootStore'
import { InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import FinancialController from '../../../controllers/FinancialController'
import { useController, useForm } from 'react-hook-form'
import { Money, MoneyOutlined } from '@mui/icons-material'
import FooterEdit from '../../../components/FooterEdit'
import { observer } from 'mobx-react-lite'

const FinancialEditPage = observer(({ control, name }) => {
  const { financialStore } = useContext(RootStoreContext)
  const controller = new FinancialController(financialStore)
  const navigate = useNavigate()
  const financialID = useParams()

  const [codeValue, setCodeValue] = useState(financialStore.state.financial?._id)
  const [inputValue, setValue] = useState(financialStore.state.financial?.value)
  const [valueType, setValueType] = useState(financialStore.state.financial?.type)
  const [toWhoValue, setToWhoValue] = useState(financialStore.state.financial?.toWho)

  // const { register, handleSubmit, setValue, getValues } = useForm({
  //   defaultValues: {
  //     code: financialStore.state.financial._id,
  //     value: parseInt(financialStore.state.financial?.value),
  //     type: financialStore.state.financial.type === 'ENTRY' ?
  //       'Entrada de Valor' :
  //       'Saída de Valor',
  //     toWho: financialStore.state.financial.toWho,
  //   },
  // })

  const navigateBack = () => {
    navigate('/financeiro', { replace: true })
  }

  const onSubmit = async () => {
    // console.log(codeValue.fixedCosts)
    let dataObj = {
      value: inputValue,
      type: valueType === 'SAÍDA' ? 'OUT' : "ENTRY",
      toWho: toWhoValue
    }
    await controller.onSave(dataObj)
  };


  useEffect(() => {
    if (financialID.id !== 'novo') {
      controller.fetchListById(financialID.id)
    }
  }, [])

  return (
    <MainPage>
      <MainEditTitle route={'financeiro'} title={'Financeiro'} />
      <Stack
        width={'50%'}
        padding={4}
        spacing={1}
      >
        {financialID.id !== 'novo' &&
          <Stack>
            <Typography
              variant='caption'
              fontFamily={'Poppins'}
              fontWeight={400}>Código</Typography>
            <TextField
              size='small'
              disabled
              value={codeValue}
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
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
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
          <Select
            size='small'
            value={valueType === 'OUT' ? 'SAÍDA' : 'ENTRADA'}
            onChange={(e) => setValueType(e.target.value)}
            placeholder='Entrada de Valor ou Saída de Valor'
            sx={{ width: '50%' }}
          >
            <MenuItem value={'SAÍDA'}>SAÍDA</MenuItem>
            <MenuItem value={"ENTRADA"}>ENTRADA</MenuItem>
          </Select>
        </Stack>
        <Stack>
          <Typography
            variant='caption'
            fontFamily={'Poppins'}
            fontWeight={400}>Favorecido</Typography>
          <TextField
            size='small'
            placeholder='Nome do Favorecido (Seja PJ ou PF)'
            value={toWhoValue}
            onChange={(e) => setToWhoValue(e.target.value)}
          />
        </Stack>
      </Stack>
      <FooterEdit onClickBack={navigateBack} onSave={onSubmit} />
    </MainPage>
  )
}
)

export default FinancialEditPage