import React, {Component} from 'react';
import Result from './Result'
import Input from './Input'

class App extends Component{
  
  state = {
    result:'5'
  }

onClick = button => {

  if(button === "="){
      this.calculate()
  }

  else if(button === "C"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      this.setState({
          result: this.state.result + button
      })
  }
}

calculate = () => {
  this.setState({
    // eslint-disable-next-line no-eval
    result:(eval(this.state.result))
  })
}

reset = () => {
  this.setState({
    result: ''
  })
}

backspace = () => {
  this.setState({
    result: this.state.result.slice(0,-1)
  })
}


  render(){
    return(
      <div>
      <div className='Calculator-body'>
      <h1>Calculator</h1>
      <Result result={this.state.result}/>
      <Input onClick={this.onClick}/>
      </div>
    </div>
    )
  }
}



export default App;
