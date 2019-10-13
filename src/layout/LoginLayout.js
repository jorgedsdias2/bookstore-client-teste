import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

const LoginLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <Login>
                <Component {...props} />
            </Login>
        )} />
    )
};

export default LoginLayout;