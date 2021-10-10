import { useDispatch } from "react-redux";
import { formData } from "./formReducer";
import { useState } from "react";
const Form = () => {
    // var data=useSelector(state=>state.data.data);
    const dispatch = useDispatch();
var [data,setData]=useState('');
console.log(data);
const formDataHandle=(d)=>
{
    console.log(d);
dispatch(formData(d))
}
    return ( <>
<h1>Name- {data}</h1>
<input type="text" onChange={(e)=>setData(e.target.value)} />
    <button onClick={()=>formDataHandle(data)}>Data</button>
    </> );
}
 
export default Form;