import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0"></div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
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