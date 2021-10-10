import React, { useState } from 'react';
const List = () => {
    const [user] = useState([
        { name: "Anil", address: "Bangalore" },
        { name: "Sunil", address: "Ballia" },
        { name: "Gudiya", address: "Mumbai" },
        { name: "Sarita", address: "Nagra" }
    ])
    return (<> <h1>List Data</h1>
        {
        user.length < 7 ? <div>   {
                user.map((user,i) =>
                    <div key={i}>
                        {user.name} ----- {user.address}
                    </div>
                ) 
             }</div>:<div>NA</div>
        }
    </>);
}

export default List;