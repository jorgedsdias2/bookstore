import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../auth';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Default extends Component {
    render() {
        return (
            <>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Menu />
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="/logout">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
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