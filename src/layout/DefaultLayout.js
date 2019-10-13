import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

import { isAuthenticated } from '../auth';

class Default extends Component {
    render() {
        return (
            <>
                {this.props.children}<br />
                <ul>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/logout">Sign out</Link></li>
                </ul>
            </>
        )
    }
}

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? (
                <Default>
                    <Component {...props} />
                </Default>
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        )} />
    )
};

export default DefaultLayout;