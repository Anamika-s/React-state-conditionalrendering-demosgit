import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'
import NewsDetails from './NewsDetails'

export default class News extends Component {
  render() {
   
    return (
      <div className="container my-3">
        <h2> News App </h2>
        <div className="row">
          <div className="col-md-4">
        <NewsDetails title="Title1" description="This is Title 1 Des" />
        </div>
        <div className="col-md-4">
               <NewsDetails  title="Title1" description="This is Title 1 Des"/>
        </div>
        <div className="col-md-4">
            <NewsDetails  title="Title1" description="This is Title 1 Des"/>
        </div>        
        </div>
        <div className="row">
          <div className="col-md-4">
        
        <NewsDetails  title="Title1" description="This is Title 1 Des"/>
        </div>
        <div className="col-md-4">
        
        <NewsDetails  title="Title1" description="This is Title 1 Des"/>
        </div>
         </div>
      </div>
    )
  }
}
