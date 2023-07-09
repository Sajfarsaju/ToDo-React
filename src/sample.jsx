// import './sample.css'
// import React from 'react';
import Headerr from './components/header';
import { useState} from 'react';
import Counter from './components/counter'
// import Employee from './components/employee';

const data="Sajfar"

function Sample() {

const [state,setState] = useState(false)

  // const [count,setCount] = useState(0)

//   let emp = [
//     {
//     name:"Sajfar",
//     age:21
//     },
//     {
//     name:"Shamna",
//     age:21
//     },
//     {
//     name:"Yaseen",
//     age:20
//     }
// ]

  // const addCount = ()=>{
  //   setCount(count+1)
    
  // }

  return (
    <div >
    <Headerr  value={data}/>
    <hr />
    <hr />
    {/* <button onClick={addCount}>Add</button> */}
    {/* <h1   style={{textAlign:"center"}}>Counter : {count} </h1> */}
    {/* <Counter {...obj} />
    <Counter title="2nd counter:" count={count} /> */}

    {/* {
      emp.map ((obj,indx)=>
       
          <Employee key={indx} {...obj} />
      
      )
    } */}

    <h1 onClick={()=>setState(!state)}>Show / Hide</h1>

    { state && <Counter/> }

    </div>
  )
}

export default Sample
