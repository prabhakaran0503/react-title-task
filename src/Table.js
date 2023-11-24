function Table(props){

    console.log(props);
    let {userData}=props
    console.log(userData);
    let ans= userData.map((e)=>{
        return(
            <tr>
                <td>{e.name}</td>
                <td>{e.age}</td>
                 <td>{e.perfession}</td>
            </tr>
        )
    })
    return(
        <div >
            <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>profession</th>
            </thead>
            <tbody>
                
            {ans}
            </tbody>
        </table>
        </div>
    )
}
export default Table;