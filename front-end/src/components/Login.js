import React,{useState} from 'react'
import { Grid,Paper,Avatar,TextField,Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CustServices from "../services/CustServices";
import { Redirect } from "react-router-dom"

function Login() {
    const paperStyle = {padding:40, height:'70vh', width:300, margin:'30px auto'}
    const avatarStyle= {backgroundColor:'green'}

    const [userName,setUserName] = useState('');
    const [password, setPassword] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    const validateFrom =()=> {
        return userName.lenght > 0 && password.lenght > 0;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const auth =()=>{
        CustServices.login(userName,password)
        .then((response) =>{
            if(response.data.message){
                setLoginStatus(response.data.message)
                {return <Redirect className="btn btn-primary m-2 " to={`/Home`}/>}

            }else{
                setLoginStatus(response.data[0].userName)
            }
            console.log(response);
        })
        
    }

    
    return (
        <div>
            <Grid>
                <Paper elevation = {11} style = {paperStyle}>
                    <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    <TextField required 
                    label="Required" 
                    placeholder="Enter Username OR Phone number"
                    onChange={(e)=> setUserName(e.target.value)}
                     />
                    <TextField
                    
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                  
              </Grid>
              <br></br>
              <Button 
              variant="contained"
               color="primary"
                variant='contained' 
                margin='10px' 
                fullWidth disabled={validateFrom()}
                onClick={handleSubmit,auth}>
                  Submit
                </Button>
                <h1>{loginStatus}</h1>
                </Paper>
                
            </Grid>
        </div>
    )
}

export default Login
