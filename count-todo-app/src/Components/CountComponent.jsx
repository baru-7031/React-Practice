import { Component } from "react";

import './Count.css'

class CountComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.increment1 = this.increment1.bind(this);
        this.increment10 = this.increment10.bind(this);
        this.increment100 = this.increment100.bind(this);

        
        
        this.decrement1 = this.decrement1.bind(this);
        this.decrement10 = this.decrement10.bind(this);
        this.decrement100 = this.decrement100.bind(this);
    }


    render() {
        return (
            <div className="CountComponent">
                <div className="container">
                    <div className='btn'>
                        <button className='left-btn all-btn' onClick={this.increment100} >+100</button>
                        <button className='right-btn all-btn' onClick={this.decrement100} >-100</button>
                    </div>
                    <div className='btn'>
                        <button className='left-btn all-btn' onClick={this.increment10}>+10</button>
                        <button className='right-btn all-btn' onClick={this.decrement10} >-10</button>
                    </div>
                    <div className='btn'>
                        <button className='left-btn all-btn' onClick={this.increment1}>+1</button>
                        <button className='right-btn all-btn' onClick={this.decrement1}>-1</button>
                    </div>
                    <div className="btn">
                        <label className='display'>{this.state.count}</label>
                    </div>
                </div>
            </div>
        );
    }

    increment1() {
        this.setState({
            count: this.state.count + 1
        })
    }

    increment10() {
        this.setState({
            count: this.state.count + 10
        })
    }

    increment100() {
        this.setState({
            count: this.state.count + 100
        })
    }

    decrement1() {

        // Negative numbers Not Allow

        // this.setState({
        //     count: this.state.count - 1
        // })

        if(this.state.count != 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    decrement10() {
        if(this.state.count > 9) {
            this.setState({
                count: this.state.count - 10
            })
        }
    }

    decrement100() {
        if(this.state.count > 99) {
            this.setState({
                count: this.state.count - 100
            })
        }
    }
}

export default CountComponent;