import React,{useState} from 'react'
import { Grid,Paper,Avatar,TextField,Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory} from "react-router-dom"

function Login() {
let history = useHistory();

const paperStyle = {padding:40, height:'70vh', width:300, margin:'30px auto'}
const avatarStyle= {backgroundColor:'green'}

const [userName,setUserName] = useState('');
const [password, setPassword] = useState("")
const[errMsg,setErrMsg]=useState('');
// const [loginStatus, setLoginStatus] = useState("")

const validateFrom =()=> {
    alert(userName);
    
}

const handleSubmit=(e)=>{
// 
e.preventDefault();
// auth();

}
const routeChange=()=> {

if ((userName ==  "admin@namasys.com") && (password == "admin123"))
    history.push('/Home');
 else 

 setErrMsg('Invalid UserName or Password');
 

}

return (
<div>
<Grid>
<Paper elevation = {11} style = {paperStyle}>
<Grid align='center'>
<Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
<div style={{color:'red',fontsize:'3px'}}>{errMsg}</div> 
<h2>Sign In</h2>
<TextField required 
label="Username" 
placeholder="Enter Username OR Phone number"
onChange={(e)=> setUserName(e.target.value)}
/>
<TextField required
label="Password"
type="password"
placeholder="Enter Password"
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
//fullWidth ={validateFrom()}
onClick={routeChange}>
Submit
</Button>

</Paper>
</Grid>
</div>
)
}

export default Login

