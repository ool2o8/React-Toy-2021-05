import React, {useState} from 'react';

import LoginWrapper from '../../Components/Login/LoginWrapper';
import InputWithLabel from '../../Components/Login/InputWithLabel';
import AuthButton from '../../Components/Login/AuthButton';
const SignIn = Props =>{
  const [values, setValues]=useState({id: "", pw: ""})
 



  const handleChange =(event)=>{
    const {name, value}=event.target
    setValues({...values,[name]:value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`ID: ${values.id} \nPW: ${values.pw}`)
  }

  return (
    <div>
    <LoginWrapper>
    <InputWithLabel label="아이디" name="id" placeholder="아이디" onChange={handleChange}/>
    <InputWithLabel label="비밀번호" name="pw" placeholder="비밀번호" type="password" onChange={handleChange}/>
    <AuthButton type="submit" onClick={handleSubmit}>로그인</AuthButton>
    </LoginWrapper>
    </div>
  )
}
export default SignIn;