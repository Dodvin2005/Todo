import React from 'react'
import {
    FaTasks,
    FaHome,
    FaList,
    FaCheckCircle,
    FaSearch,
    FaBell,
    FaUserCircle
} from 'react-icons/fa'

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-sm"
                style={{
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)"
                }}>

                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
                        <div
                            className="bg-white text-primary rounded-3 p-2 me-2 d-flex align-items-center justify-content-center"
                            style={{ width: "42px", height: "42px" }}
                        >
                            <FaTasks size={22} />
                        </div>

                        <div>
                            <span className="fs-5">TaskFlow</span>
                            <small className="d-block text-white-50"
                                style={{ fontSize: "10px" }}>
                                Task Management
                            </small>
                        </div>
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse" id="navbarContent">

                        {/* Navigation Links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active px-3" href="#">
                                    <FaHome className="me-2" />
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link px-3" href="#">
                                    <FaList className="me-2" />
                                    All Tasks
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link px-3" href="#">
                                    <FaCheckCircle className="me-2" />
                                    Completed
                                </a>
                            </li>

                        </ul>

                        {/* Right Side */}
                        <div className="d-flex align-items-center gap-3">

                            {/* Search */}
                            <div className="input-group d-none d-lg-flex"
                                style={{ width: "200px" }}>

                                <span className="input-group-text bg-white border-0">
                                    <FaSearch />
                                </span>

                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Search tasks..."
                                />

                            </div>

                            {/* Notification */}
                            <button className="btn btn-outline-light position-relative border-0">
                                <FaBell size={18} />

                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    3
                                </span>
                            </button>

                            {/* Profile */}
                            <button className="btn btn-light rounded-pill px-3 d-flex align-items-center gap-2">
                                <FaUserCircle size={22} />
                                <span className="fw-semibold">Profile</span>
                            </button>

                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header