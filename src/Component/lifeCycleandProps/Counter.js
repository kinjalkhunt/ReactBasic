import React, { Component } from 'react'

import { useState } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevprops, prevState) {
    console.log("prevNumber", prevprops.number);
    console.log("increment Number", this.props.number);


    if (prevprops.number !== this.props.number) {
      // console.log("prevNumber",prevprops.number);

      console.log("Component Did Update", this.props.number);
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}


