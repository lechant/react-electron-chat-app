import React from 'react';
import logo from './logo.svg';
import './App.css';

/*import components*/
//import Buttons from './components/button';
import ChannelNavItem from './components/channelNavItem';
import ChannelNavSearch from './components/channelNavSearch';
import ChannelTitle from './components/channelTitle'; 
import MainNavMenu from './components/mainNavMenu';
import ChannelInput from './components/channelInput';
import MessageItems from './components/messageItems';
import Dropdown from './components/dropdown';
import WindowFrame from './components/windowFrame';
import PopupInfo from './components/popupInfo';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      buttons : [{  
      }],
      counter : 0,
      dropdowns : {
        id : "none",
        display : false
      }
    }
    this.setDropdown = this.setDropdown.bind(this);
    this.setPopup = this.setDropdown.bind(this);
    //buttons = [...this.state.buttons];
  }

  /*callbackFunction = (whichButton,data) =>{
    let buttons = [...this.state.buttons];
    buttons[whichButton] = {data:data};
    this.setState({ buttons });
    this.setState({counter: this.state.counter +1});
    console.log(this.state.buttons);
    console.log(this.state.counter);
  }*/

  setDropdown(name){
    let show;
    if(this.state.dropdowns.display){
      show = false;
    }else{
      show = true;
    }
    let tempState = this.state.dropdowns;
    tempState.id = name;
    tempState.display = show;
    this.setState({tempState});
    //console.log(this.state.dropdowns);
  }

  setPopup(name){

  }

  render(){
    return (
      <div className="App">
        <div className="App-frame">
          <div className="App-channel-window-frame">
            <WindowFrame></WindowFrame>
          </div>
          <div className="App-channel-nav-search">
            <ChannelNavSearch></ChannelNavSearch>
          </div>
          <div className="App-main-nav-menu">
            <MainNavMenu img="https://i.imgur.com/rPgHQ0B.jpg" name="username" text="description"></MainNavMenu>
          </div>
          <div className="App-channel-nav-menu">
            <ChannelNavItem text="chat1" name="chat" img="https://i.imgur.com/rPgHQ0B.jpg" time="11.00"></ChannelNavItem>
            <ChannelNavItem text="chat2" name="chat" img=
            "https://wanwan-html5.moe/girls/Momiji.svg" time="11.00"></ChannelNavItem>
          </div>
          <div className="App-channel-title">
            <ChannelTitle setDropdown={this.setDropdown} name="Chat" description="lorem ispam" img="https://i.imgur.com/rPgHQ0B.jpg"></ChannelTitle>
          </div>
          <div className="App-channel-body">
            <div className="App-channel-body-display">
              <MessageItems img="https://i.imgur.com/rPgHQ0B.jpg" time="11:00" msg="lorem ispam sit amet lorem ispam sit amet" name="user1"></MessageItems>
              <MessageItems img="https://i.imgur.com/rPgHQ0B.jpg" time="11:00" msg="lorem ispam sit amet lorem ispam sit amet uahsoubwaudidawidaubdwbdawd0awndbuawawdbawbdudwdbauwdadwd8dbwdwad8wdwdwduwd8uwduwaduwduwabduawdwaduwaudwahdbawudb" name="user1"></MessageItems>
            </div>
            <ChannelInput></ChannelInput>
          </div>
          {/*conditional UI section*/}
          <Dropdown id="users" top="12vh" left="78vw" dropdown={this.state.dropdowns} item={{name:"name",img:"https://i.imgur.com/rPgHQ0B.jpg"}}></Dropdown>
          <PopupInfo></PopupInfo>
        </div>
      </div>
    );
  }
}

/*<Buttons id='btn1' sendToParent={(whichButton,data)=>this.callbackFunction(0,data)} text="lorem ispum"/>
  <Buttons id='btn2' sendToParent={(whichButton,data)=>this.callbackFunction(1,data)} text="text"/> */

export default App;
