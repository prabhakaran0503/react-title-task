
function Objectitreat(props){
    console.log(props);
    let {objdata}=props
   let store= objdata.map((e)=>{
        // console.log(e);
        return(
            <div className="bojlist">
            <li>{e.name}</li>
            <li>{e.skills[0].name}</li>
            <li>{e.skills[0].type}</li>
            <li>{e.skills[1].name}</li>
            <li>{e.skills[1].type}</li>
            </div>
        )
    })

//  employee.map((e)=>{
//     console.log(e.name);
//     [n1,n2]=e
//    console.log(n1,n2);

//  })


        return(
            <div className="obj-itrate">
                <ul>
                    {store}
                </ul>
            </div>

        )
}
export default  Objectitreat;