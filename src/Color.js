import { Component } from "react";

class Colorchange extends Component{
  constructor(){
    super()
    this.state = {

      make: "Yamaha",

      model: "R15",

      color: "blue"

    };
    
  }
  change(){
    this.setState({
      make: "Yamaha",

    model: "R15",

    color: "Red"
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.color}</h1>
        <button onClick={()=>this.change()}>Click</button>
      </div>
    )
  }
}
export default Colorchange ;