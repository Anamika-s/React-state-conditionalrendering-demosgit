import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import React from "react";
function Message (props)
{
  if(props.IsLoggedIn)
  return <h1> Welcome User </h1>
  else
  return <h1> Login again </h1>
};

function Login(props)
{
  return(
    <button> Login </button>
  )
}

function LogOut(props)
{
  return(
    <button> Log Out</button>
  )
}

export default class HomeCompn extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={IsLoggedIn:false};
  }
  render()
  {
    
    return (
<div>
  <Message IsLoggedIn={this.state.IsLoggedIn} />
  {this.state.IsLoggedIn? <LogOut/> : <Login/>}

</div>
    )
  }
}