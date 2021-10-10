import React, { useEffect } from 'react';
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
import {plusQty,minusQty} from './actions/index';
const App = () => {
  var myState=useSelector((state)=>state.changeTheQty);
  const dispatch=useDispatch();
  useEffect(()=>
  {
    document.title=`Item Value= ${myState}`;
  })
  return ( <>
  <div className='mainDiv'>
  <h1>Welcome to react-redux</h1>
<p>Increment the Decrement Items</p>
<div className='quantity-tab'>
<a id='qty_minus' onClick={()=>dispatch(minusQty())}><span>-</span></a>
<input type="text" name="" value ={myState} placeholder='0' />
<a id='qty_plus' onClick={()=>dispatch(plusQty())}><span>+</span></a>
</div>
  </div>
  </>);
}
 
export default App;