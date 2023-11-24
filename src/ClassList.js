import { Component } from "react";
class List extends Component{
    constructor(){
        super()

    }
    render(){
        const {datas}=this.props
        const stor=datas.map((e)=>{
            return(
                <ul>
                    <li>{e.name}</li> 
                    <li>{e.age}</li>
                    <li>{e.perfession}</li>
                </ul>
            )
        })

        // let user=[
        //     {
        //       name:"Karan",
        //       age:20,
        //       perfession:"Tester"
        //   },
        //   {
        //     name:"Alex",
        //     age:25,
        //     perfession:"Coder"
        // },
        // {
        //   name:"Jhon",
        //   age:20,
        //   perfession:"Developer"
        // },
        // {
        //   name:"kumar",
        //   age:25,
        //   perfession:"Designer"
        // },
        // {
        //   name:"Bala",
        //   age:30,
        //   perfession:"Tester"
        // },
        // ]
        // let stor=user.map((e)=>{
        //     return(
        //         <ul>
        //              <li>{e.name}</li>
        //              <li>{e.age}</li>
        //              <li>{e.perfession}</li>
        //         </ul>  
        //     )
        // })
        return(
            <ul className="list-cllass">
                {stor}
            </ul>
        )
    }
}
export default List;