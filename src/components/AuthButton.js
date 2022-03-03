import React, { Component } from 'react'

 
const AuthButton = props=>
{
  let {isLoggedIn} = props;

  if(isLoggedIn)
  return <button> Login </button>
  else 
  return <button> LogOut </button> 
};

export default AuthButton;