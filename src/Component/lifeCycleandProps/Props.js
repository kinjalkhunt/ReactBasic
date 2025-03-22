import React, { Component } from 'react'

export default class Props extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("When component load First time : Componenet DidMount");
  }
  // componentDidUpdate(){
  //   console.log("when Update this Component: Component DidUpdate");

  // }

  componentWillUnmount(){
    console.log("when Remove Component from Dom : Component WillUnmount");

  }

  increment(){
    this.setState({count: this.state.count +1})
  }
  render() {
    return (
      <div>
        <h1>Hello Props</h1>
        <h1>{this.state.count}</h1>
        <button className='border bg-green-200' onClick={() => this.increment()}>Clickme</button>
      </div>
    )
  }
}

