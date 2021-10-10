import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
 
const APIUser = () => {
 const api_url="https://reqres.in/api/users?page=2";
    const init=1;
    const [user,setUser]=useState([]);
    useEffect(()=>
    {
    
      fetch(api_url).then((data)=>
      {
          data.json().then(result=>
            {
                console.log(result);
                setUser(result.data);
            })  
      }).catch((error)=>console.log(error))
    },[])

   function LinkFn(url)
   {
    window.open(url, '_blank');
   }
   const style={
       cursor:"pointer"
   }
    return ( 
        
        <>
    <h1 className="text-center">API User</h1>
    <Table striped bordered hover>
<thead>
    <th>S.N.</th>
    <th>Name</th>
    <th>Email</th>
    <th>Profile</th>
</thead>
<tbody>
    {
           
        user.map((user,i)=>
        <tr key={i}><td>{i+init}</td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.email}</td>
        <td><p onClick={()=>LinkFn(user.avatar)} style={style}>{user.avatar}</p></td>
      
        </tr>
        )
    }
</tbody>
    </Table>
    </> 
    );
}

export default APIUser;