import { Button } from '@mui/material'

const MaterialButton = () => {
  return (
    <>
        <Button variant="outlined" color="primary" onClick={(e)=>console.log(e)}>MUI Button</Button>
    </>
  )
}

export default MaterialButton