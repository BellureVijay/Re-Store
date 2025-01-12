import React from 'react'
import {Backdrop,Box,CircularProgress,Typography} from  '@mui/material'
function LoadingComponent({message="loading..."}) {
  return (
    <Backdrop open={true} invisible={true}>
        <Box display="flex" justifyContent='center' alignItems='center' height="100vh">
            <CircularProgress size={100}  color="secondary"/>
        </Box>
    </Backdrop>
  )
}

export default LoadingComponent
