import { Box, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
  return (
    <Box className="pageSec display" sx={{height:"91.1vh"}}>
      <Box sx={{height:"100%", display:"flex", align:"center", justifyContent:"center"}} className="pageNotFoundSec">
        <Typography variant='h3' color="gray" align='center' sx={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
         404 Page Not Found!!
        </Typography>
      </Box>
    </Box>
  )
}

export default PageNotFound;
