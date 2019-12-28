import React from 'react';

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>

                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Authors</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">4</div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-user-edit fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Books</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">100</div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-book-open fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Categories</div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">350</div>
                                </div>
                                
                            </div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-list-alt fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">20</div>
                            </div>
                            <div className="col-auto">
                            <i className="fas fa-user-friends fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}