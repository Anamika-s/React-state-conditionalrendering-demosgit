import React, {Component} from 'react';
import './App.css';
import AuthButton from './components/AuthButton';
import AuthButton1 from './components/AuthButton1';
import NavBar from './components/NavBar';
import News from './components/News';

// class App extends React.Component
// {
//   c="Hello";
//   render()
//   { 
//     return <div> <NavBar/>
//     <News/> </div>
//   }
// }
 
export class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      isLoggedIn: true
    }
  }
  render() {
      let {isLoggedIn} = this.state;
    // let AuthButton;
    // if(isLoggedIn)
    // AuthButton =<button> Login </button>
    // else
    // AuthButton=<button> LogOut </button>
    // const renderAuthButton = ()=>
    // {
    //   if(isLoggedIn)
    //   return <button> Login </button>
    //   else 
    //   return <button> LogOut </button> 
    // }
    return (
      <div>
        <h1> This is a demo foe showing Cond Rendering of the elements</h1>
{/*   
         {AuthButton} */}
         {isLoggedIn  && <button> LogOut </button>}
         {/* {isLoggedIn?<button> Login </button> : <button> LogOut </button>} */}
        {/* {/* <button> Login </button>
        <button> LogOut</button> */}
        {/* {renderAuthButton()} */}
        {/* <AuthButton isLoggedIn={this.state.isLoggedIn}/> */}
        {/* <AuthButton1 isLoggedIn={this.state.isLoggedIn}/>  */}
        
        
          </div>   
      )
  }
}
 

  

export default App;
