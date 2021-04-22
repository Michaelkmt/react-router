import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Message from './Message'

 class Messages extends Component {
    render() {
        return (
            <div>
                <ul>
                   
                <Link to='/messages/1'> <li key="1">Message Number - 1 </li></Link>
                <Link to= '/messages/2'><li key="2">Message Number - 2 </li></Link>
                <Link to= '/messages/3'><li key="3">Message Number - 3 </li></Link>
                

                </ul>

                <Switch>
                    <Route path='/messages/:id' exact strict component={Message}/>
                    
                </Switch>
                

                This is my Messages page..
            </div>
        )
    }
}

export default Messages;
