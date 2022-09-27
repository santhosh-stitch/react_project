import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import stitch from './img/StitchLogo.svg';
import './Login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import store from './store/Type';
import { setToken } from './store/action';
import { setAuth } from './store/action/authorization';

const API = axios.create();
const LoginForm=()=>{
  const authorization = `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`;
  const[partnerName,setPartnerName]=useState('');
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const[success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
try {
       console.log(process.env.REACT_APP_URL);
        const response = await API.post(
          process.env.REACT_APP_URL + "/v1/stitchapp/api",
          {
            endPoint: "/v1/auth/login",
            httpMethod: "POST",
            request: {
              partnerName: partnerName,
              userName: userName,
              password: password,
            },
          }
          ,{
            headers:{
              authorization: authorization,
            }
          }
        );
       
        store.dispatch(setToken(response.data));
        store.dispatch(setAuth(authorization));
        console.log(response.data);
       
        if(response.status===200){
          setSuccess("Login Successful!!")
        }
        console.log(authorization);
    }catch(e) {
      console.log(e);
    }
}

  return(
   
     <header className='App-header'>
       <div className='base'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <img className='photo' src={stitch} alt='stitch-img'/>
        <br/>
        <br></br>
            <div>
              <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-required"
              name="partnerName"
             // inputRef={partnerName}
             onChange={e => setPartnerName(e.target.value)}
              label="Partner Name*"
              />
              </div>
              <br></br>
              <div>
              <TextField
              InputLabelProps={{ shrink: true }}
              id="outlined-required"
              name="userName"
              //inputRef={userName}
              onChange={e => setUserName(e.target.value)}
              label="User Name*"
              />
              </div>
              <br></br>
              <div>
              <TextField
              InputLabelProps={{ shrink: true }}
              type="password"
              id="outlined-required"
              name="password"
              //inputRef={password}
              onChange={e => setPassword(e.target.value)}
              label="Password"
              /> 
            </div>
            <br></br>
            <div>
            <Button
            variant='contained'
            type='submit'
            >
            Login
            </Button>
            </div>
            <p>{success}</p>
      </form>
      </div>
     </header>
    
  )
}
const mapStateToProps = (state, authorization) => {
  return {
    tokenId: state.tokenId,
    authorization: state.authorization,
  }
};

export default connect(mapStateToProps, null)(LoginForm);

