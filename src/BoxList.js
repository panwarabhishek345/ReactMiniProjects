import React, { Component } from 'react'
import Box from './Box'
import "./BoxList.css";
import { v4 as uuid } from 'uuid';

class BoxList extends Component{

    render(){
        return (
            <div className="BoxList">
                {this.props.boxes.map(box => {
                    return <Box key={uuid()} height={box.height} width={box.width} color={box.color}/>
                })}
            </div>
        );
    }
}

export default BoxList;