
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement, incrementByAmount} from "./counterReducer";

const CounterFunc = () => {

const counter=useSelector(state=>state.counter.value);

const dispatch = useDispatch();
const incrementCounter=()=>
{
 
    dispatch(increment());
}
const decrementCounter=()=>
{
    if(counter>0)
    {
        dispatch(decrement());
    }
}
const incrementByAmountCounter=(ctr)=>
{
    
    dispatch(incrementByAmount(ctr));
    
}
 
const margin={
    margin:"12px"
}
    return ( <>
    <div  style={{textAlign:"center"}}>
    <h1>Counter {counter}</h1>
   
    <button style={{margin}} onClick={()=>incrementCounter()}>Add Cart</button>
    <button style={{margin}} onClick={()=>decrementCounter()}>Remove</button>
    <button style={{margin}} onClick={()=>incrementByAmountCounter(100)}>Increment By Amount</button>
  
    </div>
    </> 
    );
}
 
export default CounterFunc;