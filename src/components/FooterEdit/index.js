import { Button, Divider, Stack } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FooterEdit = ({ onClickBack, onSave }) => {

  return (
    <Stack width={'100%'} mt={4}>
      <Divider />
      <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} mt={2} spacing={1}>
        <Button variant='outlined'
          onClick={() => onClickBack()}
          sx={{ minWidth: 150 }}>Voltar</Button>
        <Button variant='contained'
          onClick={() => onSave()}
          sx={{ minWidth: 150 }}>Salvar</Button>
      </Stack>
    </Stack>
  )
}

export default FooterEdit