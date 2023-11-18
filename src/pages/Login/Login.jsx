import React from 'react'
import './Login.css'
import './Loginmediaquery.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../MyContexts';


function Login() {
  
  const {setLogin} = useContext(GlobalContext)
  const checklogin = localStorage.getItem('login') //checking login status from localstorage

  const [error, setError] = useState("")
  const navigate = useNavigate()

  const initState = {
    username: "",
    password: "",
  };

  const schema = Yup.object().shape({
    username: Yup
      .string()
      .min(5, "User Name is too Short, must be atleast 5 digits!")
      .max(16, "User Name is too Long")
      .required(),
      password: Yup
      .string()
      .min(8, "Password is too Short, must be atleast 8 digits!")
      .max(16, "Password is too Long")
      .required(),
  });

  const handleFormSubmit = (event) => {
    if(formik.values.username.toLowerCase()==="farhaj" && formik.values.password==="farhaj123"){      //hardcoding user credentials for login
      setLogin("logged-in")
      localStorage.setItem('login', 'logged-in')          //saving user set flag in localstorage to save state even on refresh           
      navigate('/products')

    }else{
      setError("Your username or password is incorrect! Try again")
    }
  };

  const formik = useFormik({
    initialValues: initState,
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  if(checklogin==="logged-out" || checklogin===null){
    return (
      <div className='main-login'>
          <div className='login'>
            <h1>MyStore</h1>
            <p className='msg'>Welcome back</p>
            <form onSubmit={formik.handleSubmit}>
              <input 
              className='text'
              type="text" 
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder='Username'
              required />
              {formik.touched.username && formik.errors.username ? (
                <div style={{color:"#CC0000", textAlign:"center"}}>{formik.errors.username}</div>
              ) : null}
              <input 
              className='password'
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder='Password' 
              required />
              {formik.touched.password && formik.errors.password ? (
                <div style={{color:"#CC0000", textAlign:"center"}}>{formik.errors.password}</div>
              ) : null}
              <button type='submit'>Login</button>
              <div style={{color:"#CC0000", textAlign:"center", marginTop:"3%"}}>{error}</div>
            </form>
          </div>
        </div>
    )
  }else {
    return(
      <Navigate to={'/'}/>    //show homescreen if someone directly passes login route if loggedin else show login form
    )
  }
}

export default Login