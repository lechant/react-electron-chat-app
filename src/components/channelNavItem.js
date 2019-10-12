import React from 'react';
import './channelNavItem.css';
//const ipcRenderer = window.require('electron');

class ChannelNavItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img : {
                background: "url(" + this.props.img + ")",
                backgroundSize: "cover",
                backgroundColor:"none",
                backgroundPosition:"center"
            },
            name : this.props.name,
            text : this.props.text,
            time : this.props.time,
            style : {
                background: 'white',
                width :'10vw',
                height : '10vw',
                border : '1px solid black',
                color: 'black'
            }
        }
    }

    render(){
        return(
            <div className="channelNavItem">
                <div className="channelNavItem-img" style={this.state.img}></div>
                <div className="channelNavItem-name">{this.state.name}</div>
                <div className="channelNavItem-time">{this.state.time}</div>
                <div className="channelNavItem-text">{this.state.text}</div>
            </div>
        );
    }
}

export default ChannelNavItem;