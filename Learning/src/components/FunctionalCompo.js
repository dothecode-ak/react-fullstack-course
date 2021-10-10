
import React, { useEffect,useState } from "react";
const FunctionalCompo = () => {
const [name,setName]=useState("Anil");
useEffect(()=>
{
   console.log('Use Effect');
},[]);
//Event
const Event=(e)=>
{
    setName(e.target.value);
}
    return ( <><p>Functional Component</p>
    <h2>{name}</h2>
    <input type="text" name="" id="" value={name} onChange={Event} />
    <button onClick={()=>alert(name)}>Click fnc</button></>
         );
}
 
export default FunctionalCompo;