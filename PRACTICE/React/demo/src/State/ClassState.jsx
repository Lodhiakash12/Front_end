import React, { Component } from 'react'

import Image from './Image';

export class ClassState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Aakash",
            count: 0,
            isimage: true,
            course: {
                front: "Frontend",
                back: "Backend"
            }

        }
    }
      

      
    render() {
        return (
            <div>
                <h1>Hello Name:{this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Aniket"})}>Change Name</button>
                <button onClick={()=>this.setState({name:"Karn"})}>Cnahnge Name1 </button>


                <h1>Course:{this.state.course.front}</h1>
                <h1>Count : {this.state.count}</h1>

                <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
                <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>

                <button Class="btn btn-success" onClick={() => this.setState({  isimage: false})}>hide</button>
                <button Class="btn btn-primary" onClick={() => this.setState({isimage:true})}>Show</button>
                <button onClick={() => this.setState({isimage:!this.state.isimage})}>Toggle</button>

                  

                {
                    (this.state.isimage) ? <Image /> : false
                }

            </div>
        )
    }
}

export default ClassState

