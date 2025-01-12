import React from 'react'
import {Container,Paper,Typography} from '@mui/material'
function ServerError() {
  return (
    <div>
      <Container component={Paper}>
        <Typography varient='h5'>Server Error</Typography>

      </Container>
    </div>
  )
}

export default ServerError
