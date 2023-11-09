import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes() {
  const getData = ()=> {
    return localStorage.getItem('login')      //getting usertoken from localstorage
  }
return (
  <div>
      {getData()==="logged-in" ? <Outlet /> : <Navigate to={'/login'}/>}      
  </div>
)
}

export default ProtectedRoutes