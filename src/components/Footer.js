import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/footer-logo.jpeg'


const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='12px'>
        <img src={Logo} alt="Logo" width='200px' height='150px'/>
        <Typography variant='h5' mt='2px'>
          When I feel pain, that's when I start counting, because that's when it really counts - 
          <span style={{color: '#FF0000'}}> MUHAMMAD ALI</span>
        </Typography>
        <Typography fontWeight={20}>
          Made by Ravnoor Singh
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer