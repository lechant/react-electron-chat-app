import React from 'react';
import './channelNavSearch.css';

/*
navigation search bar and navigation items/results
constructing as single component to manage all changes to the menu in one component
*/
class ChannelNavSearch extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="channel-nav-search">
                <i className="search-icon"></i>
                <div className="search-bar">
                    <input className="search-bar-input"></input>
                </div>
            </div>
        );
    }
}

export default ChannelNavSearch;