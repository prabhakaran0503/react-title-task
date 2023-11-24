function ListItem(props){
    console.log(props);
    let {userData}=props
    console.log(userData);
    let ans= userData.map((e)=>{
        return(
            <tr>
                <li>{e.name}</li>
                <li>{e.age}</li>
                 <li>{e.perfession}</li>
            </tr>
        )
    })
    return(
        <div className="sec">
            <ul>
                {ans}
            </ul>
        </div>
    )
}
export default ListItem;