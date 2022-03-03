import React, { Component } from 'react'

export default class NewsDetails extends Component {
   // Destructuring
  
  // constructor()
  // {
  //   super();
  // }
  render() {
    let {title, description} = this.props;
    return (
      <div className="card" style={{width: "18rem;"}}>
  <img src="/public/logo192.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {description}  </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
  }
}
