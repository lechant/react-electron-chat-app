import React from 'react';
import './popupInfo.css';

export default class PopupInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: {
                background: "url("+"https://i.imgur.com/rPgHQ0B.jpg"+")",
                backgroundSize: "cover",
                backgroundColor:"none",
                backgroundPosition:"center"
            },
            visible: true,
            name : "user"
        }
        this.closePopup = this.closePopup.bind(this);
    }
    closePopup(){
        this.setState({
            visible: false
        });
    }
    render(){
        if(this.state.visible){
            return(
                <div className="popupInfo-background" onClick={this.closePopup}>
                    <div className="popupInfo-container">
                        <div className="popupInfo-img" style={this.state.img}></div>
                        <div className="popupInfo-name">{this.state.name}</div>
                    </div>
                </div>
            );
        }else{
            return("");
        }
    }
}