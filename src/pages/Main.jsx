import React, { useEffect } from 'react'
import QuizPart from '../components/QuizPart'
import { Box } from '@mui/material'

export default function Main() {

  // Quiz Page
  return (
    <Box sx={{background:'#0a003b',paddingBottom:{xs:8}}}>
      <QuizPart />
    </Box>
  )
}
