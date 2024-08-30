import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0,
            liveText : ""
        }
        console.log(this)
    }

    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count>0 && this.setState({count : this.state.count - 1}) 
    
    // componentDidMount(){
    //     console.log("Mount")
    // }
    // componentDidUpdate(){
    //     console.log('Update')
    // }
    // componentWillUnmount(){
    //     console.log('Unmount')
    // }

    componentDidMount(){
        document.title = "Hi"
    }

    componentDidUpdate(){
        document.title = this.state.liveText
    }

    componentWillUnmount(){
        document.title = "Bye"
    }
    
    render(){
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input type="text" onChange={(e)=>this.setState({liveText : e.target.value})}/>
                <h2>{this.state.liveText}</h2>
            </div>
        )
    }
}

export default Counter