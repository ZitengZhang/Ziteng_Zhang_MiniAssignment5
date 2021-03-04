import React from 'react';
import Box from './Box';
import './index.css';



export default class Container extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            boxes: Array(4).fill("white"),
            number : 0
        };
    }

    handleClick(i){
        const boxes = this.state.boxes.slice();
        //console.log(boxes);
        //boxes[i] = boxes[i] === "white" ? "black" : "white";
        
        if(boxes[i] === "white"){
            boxes[i] = "black";
            this.setState({number : this.state.number + 1})
        }else{
            boxes[i] = "white";
            this.setState({number : this.state.number - 1})
        }


        this.setState({boxes : boxes});

    }

    renderBox(i){
        return(
            <Box
                color = {this.state.boxes[i]}
                onClick={()=> this.handleClick(i)}
             />
        )
    }


    render(){

        return(
            <div>
                <div>Count: {this.state.number}</div>
                <div className= "container">
                    {this.renderBox(0)}{this.renderBox(1)}
                </div>
                <div className= "container">
                    {this.renderBox(2)}{this.renderBox(3)}
                </div>
            </div>


        )
    }

}