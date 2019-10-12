import React from 'react';
import './channelTitle.css';

class ChannelTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            description : this.props.description,
            img : {
                background: "url("+this.props.img+")",
                backgroundSize: "cover",
                backgroundColor:"none",
                backgroundPosition:"center"
            }
        }
    }
    render(){
        return(
            <div className="channelTitle">
                <div className="channelTitle-img" style={this.state.img}></div>
                <div className="channelTitle-title">{this.state.name}</div>
                <div className="channelTitle-description">{this.state.description}</div>
                <i className="channelTitle-search"></i>
                <i className="channelTitle-users" onClick={()=>this.props.setDropdown("users")}></i>
                <i className="channelTitle-settings"></i>
            </div>
        );
    }
}

export default ChannelTitle;