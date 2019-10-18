import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Bookstore</div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Addons
                </div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Main Pages:</h6>
                            <Link className="collapse-item" to="/authors">Authors</Link>
                            <Link className="collapse-item" to="/books">Books</Link>
                            <Link className="collapse-item" to="/categories">Categories</Link>
                            <Link className="collapse-item" to="/users">Users</Link>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        </>
    )
}