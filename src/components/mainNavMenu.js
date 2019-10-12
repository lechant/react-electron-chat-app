import React from 'react';
import './mainNavMenu.css';

class MainNavMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img : {
                background : "url(" + this.props.img + ")",
                backgroundSize: "cover",
                backgroundColor:"none"
            },
            name : this.props.name,
            text : this.props.text
        }
    }
    render(){
        return(
            <div className="mainNavMenu">
                <div className="mainNavMenu-img" style={this.state.img}></div>
                <div className="mainNavMenu-name">{this.state.name}</div>
                <div className="mainNavMenu-text">{this.state.text}</div>
                <i className="mainNavMenu-settings"></i>
            </div>
        );
    }
}

export default MainNavMenu;