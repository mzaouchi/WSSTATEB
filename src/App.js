import React from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      show : false
    }
  }
  render(){
    return(
      <div>
        <h1 className={this.state.show ? "kadra" : "hamra"}>Workshop State</h1>
        <button onClick={()=> this.setState({show : !this.state.show})}>{this.state.show ? "Hide" : "Show"}</button>
        {
          this.state.show === true &&  <Counter/>
        }
       
      </div>
    )
  }  
}


export default App;
