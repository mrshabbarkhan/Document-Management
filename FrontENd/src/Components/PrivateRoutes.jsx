
import useAuthStatus from "../hooks/useAuthStatus"
import { Box, Typography } from "@mui/material"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
  
  const {isLoggedIn , checkStatus} = useAuthStatus()

  if(checkStatus){
    return(
      <Box>
        <Typography variant="h2">
          Loadding.....
        </Typography>
      </Box>
    )
  }

 return isLoggedIn ? <Outlet/> : <Navigate to={"/login"}/>;

}


export default PrivateRoutes;