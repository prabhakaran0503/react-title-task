// import React from 'react';
import React, { useState } from 'react'
function Sign(){
    
    const [count, setcount]=useState(true)
    const [para,setpara]=useState(true)
  
    const ignIn=()=>{
        setcount(false)
        setpara(false)
    }
    const signOut=()=>{
        setcount(true)
        setpara(true)
    }
    return(
        <div className='usestate-btn'>
            {
           count ?(<p>please Sign in</p>) : (<p>welcome back</p>)
            }
            {
           para ?(<button onClick={ignIn}>Sign In</button>):(<button onClick={signOut}>Sign Out</button>)
            }
        </div>
    )
}
export default Sign ;