import React from 'react';
import './index.css';



export default class Box extends React.Component{



        render(){
            return(
            <div className="box"
                onClick={()=> this.props.onClick()}
                style = {{background: this.props.color}}>
            </div>
            )
        }



}