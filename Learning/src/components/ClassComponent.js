import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor()
    {
        super();
        console.log('Constructor');
        this.state={
            name:'Anil'
        }
    }
    componentDidMount()
    {
        console.log('Did mount');
    }
    componentDidUpdate()
    {
 
        console.log('Update mount');
    }
     funcName(name) {
        console.log(name);
    }
    render() {
        return (
            <div>
                <p>Class Component</p>
                <h1>Name- {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Sarita"})}>Click</button>
            </div>
        );
    }
}

export default ClassComponent;