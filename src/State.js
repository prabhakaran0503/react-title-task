import {Component} from 'react'

class User extends Component{
    constructor(){
        super()
        this.state={message:""}
        this.state={count:0}
    }
    messagechange(){
        this.setState({
            message:"Hellow"
        })
    }
    messagechange1(){
        this.setState({
            message:"Welcome"
        })
    }
    coundincrement(){
        this.setState({
            count:this.state.count+1
        })
    }
    counddecrement(){
        this.setState({
            count:this.state.count>0?this.state.count-1:this.state.count
        })
    }
    
    render(){
        return(
          <div className="sec">
              <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.messagechange()}}>Change</button>
                <button onClick={()=>{this.messagechange1()}}>Change</button>
            </div>
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.coundincrement()}}>Incrementr</button>
                <button onClick={()=>{this.counddecrement()}}>Decrementr</button>
            </div>
          </div>
            
            
        )
    }
}
export default  User ;  


