//CLASS BASED PARENT

import React,{Component} from 'react';

class Parent extends Component{
    constructor(props){
        super(props);
        this.state ={
            message: 'Hello from Parent'
        };
    }

    render(){
        return(
            <div  style = {{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                alignItems:'center'
              }}>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}


export default Parent;