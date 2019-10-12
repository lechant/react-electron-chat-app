import React from 'react';
import './messageItems.css';

class MessageItems extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            time : this.props.time,
            msg  : this.props.msg,
            name : this.props.name,
            img: {
                background: "url(" + this.props.img + ")",
                backgroundSize: "cover",
                backgroundColor:"none",
                backgroundPosition:"center"
            }
        }
    }
    render(){
        return(
            <div className="messageItem">
                <div className="messageItem-img" style={this.state.img}></div>
                <div className="messageItem-nameTime">
                    <div className="messageItem-name">{this.state.name}</div>
                    <div className="messageItem-time">{this.state.time}</div>
                </div>
                <div className="messageItem-msg">{this.state.msg}</div>
                <div className="messageItem-borderBottom"></div>
            </div>
        );
    }
}

export default MessageItems;