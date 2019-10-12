import React from 'react';
import './windowFrame.css';
const remote =  window.require('electron').remote;
const win = remote.getCurrentWindow();

export default class WindowFrame extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }   
        this.maximizeWindow = this.maximizeWindow.bind(this);
        this.minimizeWindow = this.minimizeWindow.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }

    minimizeWindow(){
        win.minimize();
    }
    maximizeWindow(){
        if (!win.isMaximized()) {
            win.maximize();          
        } else {
            win.unmaximize();
        }
    }
    closeWindow(){
        win.close();
    }

    render(){
        return(
            <div className="windowFrame">
                <div className="windowFrame-bar">
                    <i className="windowFrame-icon"></i>
                </div>
                <a className="windowFrame-minimize" onClick={this.minimizeWindow}></a>
                <a className="windowFrame-maximize" onClick={this.maximizeWindow}></a>
                <a className="windowFrame-close" onClick={this.closeWindow}></a>
            </div>
        );
    }
}