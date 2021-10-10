import { useSelector } from "react-redux";

const Common = () => {
    const count =useSelector(state=>state.counter.value);
    const data =useSelector(state=>state.data.value)
    console.log(count);
    console.log(data);
    return ( <>
<p>{count}</p>
<p>{data}</p>
    </> );
}
 
export default Common;