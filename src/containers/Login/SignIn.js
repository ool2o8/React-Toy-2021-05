import React, {useState} from 'react';

import LoginWrapper from '../../Components/Login/SignIn/LoginWrapper';
import InputWithLabel from '../../Components/Login/SignIn/InputWithLabel';
import AuthButton from '../../Components/Login/SignIn/AuthButton';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignIn = Props =>{
  const [values, setValues]=useState({id: "", pw: ""})
 
  const handleChange =(event)=>{
    const {name, value}=event.target
    setValues({...values,[name]:value})
  }
  const res = (event, res) => {
    event.preventDefault()
    alert(`${res}`)
  } 
  let history = useHistory();
  const login=async(event) => {
   
  
    const response=axios({
      method: "post",
      url: "http://3.209.175.156/login",
      data: JSON.stringify({
        'login_id': values.id,
        'password': values.pw,
      }),
    })
      .then((res) => {
        console.log(res.data);
        window.alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      history.push("/home");
      return await response;
      
  }
  return (
    <div>
    <LoginWrapper>
    <InputWithLabel label="아이디" name="id" placeholder="아이디" onChange={handleChange}/>
    <InputWithLabel label="비밀번호" name="pw" placeholder="비밀번호" type="password" onChange={handleChange}/>
    <AuthButton type="submit" onClick={login}>로그인</AuthButton>
    </LoginWrapper>
    </div>
  )
}
export default SignIn;