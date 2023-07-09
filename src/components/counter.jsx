import React from 'react'
import { useState , useEffect} from 'react'
function counter() {
 const [count,useCount] = useState(0)
 const [count2,useCount2] = useState(0)

 useEffect(()=>{
    console.log("Mounting...");
    console.log("count1 : "+count);
    console.log("count2 : "+count2);
   
 },[count,count2])
  return (
    <div>
        <button  onClick={()=>useCount(count+1)} >Increment</button>
        <h1>Hello i am a Counter:{count}</h1>
        
        <button  onClick={()=>useCount2(count2+1)} >Increment</button>
        <h1>Hello i am a Counter 2:{count2}</h1>
        </div>
        
  )
}

export default counter