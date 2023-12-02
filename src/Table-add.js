// import { useState } from "react";
import React, {useState} from 'react'; 


function Table_ad(){
    const List=[
        {
            id:1,
            name:"Kumar",
            age:25
        },
        {
            id:2,
            name:"Bala",
            age:24
        }
    ]
    const [lists,setlist]=useState(List)
     const [updatestate,setupdatestate]=useState(-1);
    return(
        
        <div className='table-sec'>
              
             <div className='table-contaner'>
             <Formcreat setlist={setlist} />
             <form onSubmit={handleupdate}>
             <table className='table-tag'>
               {
                 lists.map((current)=>(
                    updatestate ===current.id ? < Edit current={current} lists={lists} setlist={setlist} /> :
                    // console.log(current);
                    
                    <tr className='table-row'>
                         <td>{current.id}</td>
                        <td>{current.name}</td>
                        <td>{current.age}</td>
                       
                       <tr>
                          <button className='table-btn-edit' onClick={()=>valueedit(current.id)} >Edit</button>
                          <button className='table-btn-delete' onClick={()=>valuedelete(current.id)}>Delete</button>
                       </tr>
                    </tr>
                 ))
                
               }
               
               </table>
             </form>
             </div>

        </div>
        
        
    )
    function handleupdate(e){
        e.preventDefault()
        setupdatestate(-1)
    }
    function valueedit(id){
        setupdatestate(id)
    }
    function Edit( {current,lists,setlist}){

        function handieinput(e){
           
            const newlist = lists. map(li =>(
                li.id === current.id ? {...li, [e.target.name] : e.target.value}:li
            ))
            setlist(newlist)
        }

        return(
            <div>
                <td><input type='text' name='name' id='input-tag' onChange={handieinput} value={current.name } /></td>
                <td><input type='text' name='age' id='input-tag' onChange={handieinput} value={current.age } /></td>
                <td><button type='submit'>Update</button></td>
            </div>
        )
    }

    function valuedelete(id){
     const newlist=lists.filter((li)=>li.id !=id);
     setlist(newlist)
        console.log(id);
    }
}
function Formcreat({setlist}){
    function random(){
        return(parseInt(Math.random()*10000))
    }
    
    function getvalue(event){
        event.preventDefault()
        const name=event.target.elements.name.value
        const age=event.target.elements.age.value
        // console.log(name);
        // console.log(age);
        const newlist={
            id:random(),
            name,
            age
        };
        setlist((prevList)=>{
            return prevList.concat(newlist)
        })
    }
    
    return(
        <div>
            <form id='table-form' onSubmit={getvalue}>
                <input type='text' name='name' placeholder='Enter Your Name' />
                <input type='text' name='age' placeholder='Enter Your Age'/>
                <button type='submit'>Click</button>
            </form>
        </div>
    )
   
}

export default Table_ad;