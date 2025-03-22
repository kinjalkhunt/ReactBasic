import React, { Component } from 'react'
import Counter from './Counter';
import Counter1 from './Counter1';

export default class ReactLifecycle extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Component DidMount : When Component Render First time");
    }

    componentWillUnmount() {
        console.log("Component DidUnmount : When Component Remove From Dom");
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment.bind(this)}>Clickme</button>
                <Counter number={this.state.count} />
                <Counter1 number={this.state.count} />

                <button onClick={() => this.increment()}>Clickme</button>



            </div>
        )
    }
}