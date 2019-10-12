import React from 'react';
import './button.css';
//const { dialog } = window.require('electron').remote;
const {ipcRenderer} = window.require('electron');
//var obj = fs.readFile(__dirname + "/config.json");


/*var obj = {
    "one" : 1,
    "two" : 2,
    "three" : 3
}*/

ipcRenderer.on('reply',(event,arg)=>{
    console.log(arg)
});

class Buttons extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            id : this.props.id, 
            text: this.props.text,
            style: {
                background: '#000000'
            }
        }
    }
    logme(){
        //console.log(dialog.showOpenDialog());
        ipcRenderer.send('file','two');
    }
    sendData(){
        this.props.sendToParent(this.state.id,{'id': this.state.id});
    }
    render(){
        return <button className="button" id={this.state.id} className="button" onClick={this.logme.bind(this)}>{this.props.text||'default text'}</button>;
    }
}

export default Buttons;