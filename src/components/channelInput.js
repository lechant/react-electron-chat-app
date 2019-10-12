import React from 'react';
import './channelInput.css';

class ChannelInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rows : 1,
            text : "",
            placeholder : this.props.placeholder
        }
    }
    expandInput(evt){
        let text = evt.target.value;
        let cols = evt.target.cols;
        let count = 0;
        count = (text.match(/\n/g) == null ? 1 : text.match(/\n/gm).length) + 1;
        this.setState({
            rows: count,
            text: text
        });
        console.log(cols);
        console.log(count);
    }
    render(){
        return(
            <div className="channelInput">
                <div className="channelInput-container">
                    <div className="channelInput-input" contentEditable="true" placeholder={this.state.placeholder}></div>
                    <i className="channelInput-emoji"></i>
                    <i className="channelInput-send"></i>
                </div>
            </div>
        );
    }
}

export default ChannelInput;