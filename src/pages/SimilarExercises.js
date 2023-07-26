import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import Loader from '../components/Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0px'}}}>
      {/* for the similar exercise */}
      <Typography variant='h3' mb={5}>Exercises that target same muscle group</Typography>
      <Stack direction='row' sx={{p:'2px',position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises }/> : <Loader/>}
      </Stack>
      {/* for the similar equipment exercises */}
      <Typography variant='h3' mb={5}>Exercises that use the same equipment</Typography>
      <Stack direction='row' sx={{p:'2px',position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises }/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises