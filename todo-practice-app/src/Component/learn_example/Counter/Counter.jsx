import React, { Component } from "react";
import './Counter.css'


class Count extends Component {

    constructor() {
        super() // Error Number 1
        this.state = {
            count : 0
            // ,
            // secondCount: 100
        }

        this.increment = this.increment.bind(this);      // Auto binding wehen we use arrow function
    }


    render () {
        // let style = {fontSize: "50px", padding: "15px 30px"};
    // render = () => {
        return (
            <div className="Count">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" 
                    // style={style}
                >{this.state.count}</span>
                {/* <span className="count">{this.state.secondCount}</span> */}
            </div>
        );
    }

    increment() {  // update state - counter++
    // increment = () => {  // update state - counter++
        // console.log("increment")
        // this.state.count++;
        this.setState({
            count: this.state.count + parseInt(this.props.by)
            // ,
            // secondCount: this.state.secondCount + 1
        });
    }
}





export default Count