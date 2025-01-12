import React,{useState} from 'react'
import {Typography,ButtonGroup,Button,Alert,List,ListItemText,AlertTitle,ListItem} from '@mui/material'
import agent from '../../app/api/Agent'
function About() {
  const[validationErrors, setValidationErrors]=useState([]);

  const getValidationError=()=>{
    agent.testErrors.getValidationError().then(res=>console.log(res)).catch(err=>setValidationErrors(err))
  }
  return (
    <Typography>
      <ButtonGroup varient='h2'>
        <Button onClick={()=>agent.testErrors.get400Error().catch(res=>console.log(res))}>
          test 400
        </Button>
        <Button onClick={()=>agent.testErrors.get401Error().catch(res=>console.log(res))}>
          test 401
        </Button>
        <Button onClick={()=>agent.testErrors.get404Error().catch(res=>console.log(res))}>
          test 404
        </Button>
        <Button onClick={()=>agent.testErrors.get500Error().catch(res=>console.log(res))}>
          test 500
        </Button>
        <Button onClick={getValidationError}>
          test validation error
        </Button>
      </ButtonGroup>

{validationErrors.length>0 &&
      <Alert severity='error'>
        <AlertTitle> Validation Error</AlertTitle>

        <List>
          {validationErrors.map((res,index)=>(
            <ListItem key={index}>

              <ListItemText>error</ListItemText>
            </ListItem>
          ))}
        </List>
      </Alert>
}
    </Typography>

  )
}

export default About
