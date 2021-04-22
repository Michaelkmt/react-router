import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                
                <h2>Error 404! Page Not Found</h2>
                <Link to='/'>Go Home</Link>
            </div>
        )
    }
}

export default NotFound;
