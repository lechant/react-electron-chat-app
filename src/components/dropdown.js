import React from 'react';
import './dropdown.css';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            id : this.props.id,
            position : {
                top: this.props.top,
                left:this.props.left
            },
            item : {
                img: {
                    background: "url("+this.props.item.img+")",
                    backgroundSize: "cover",
                    backgroundColor:"none"
                },
                name : this.props.item.name
            }
        }
    }
    //fourth attempt
    //store states in app.js
    //place all necessary info as props and transfer to state
    //keep componentWillRecieveProps

    componentWillReceiveProps({dropdown}){
        if(dropdown.display && dropdown.id==this.state.id){
            this.state.show = dropdown.display;
        }else{
            this.state.show = false;
        }
    }

    render(){
        if(this.state.show){
            return(
                <div className="dropdown" style={this.state.position}>
                    <div className="dropdown-header">
                        <p>{this.state.id}</p>
                    </div>
                    <div className="dropdown-items">
                        <div className="dropdown-items-img" style={this.state.item.img}></div>
                        <div className="dropdown-items-name">{this.props.item.name}</div>
                    </div>

                    <div className="dropdown-items">
                        <div className="dropdown-items-img"></div>
                        <div className="dropdown-items-name"></div>
                    </div>
                </div>
            );
        }else{
            return("");
        }
    }
}

export default Dropdown;