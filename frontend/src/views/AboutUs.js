import React from 'react';
import { Component } from "react";

export default class ToyDetails extends Component {
  state = {

  }

  render() {
    return <React.Fragment>
      <div className="container about">
        <h1>About Us</h1>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/ClU3fctbGls">
        </iframe>
      </div>
    </React.Fragment>
  }
}