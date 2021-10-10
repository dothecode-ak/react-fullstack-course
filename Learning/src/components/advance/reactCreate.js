import React from "react";
const Dummy=(user) => React.createElement('h1',{className:"name1"},`Custom Data- Hello ${user.name}`);
export default Dummy;
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}