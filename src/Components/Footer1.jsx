import React from 'react'
import {
    FaTasks,
    FaHome,
    FaList,
    FaCheckCircle,
    FaGithub,
    FaLinkedin,
    FaInstagram
} from 'react-icons/fa'

function Footer1() {

    return (
        <footer
            className="text-white mt-5 pt-5 pb-3"
            style={{
                background: "linear-gradient(135deg, #312e81, #4f46e5, #7c3aed)"
            }}
        >

            <div className="container">

                <div className="row g-4">

                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">

                        <div className="d-flex align-items-center mb-3">

                            <div
                                className="bg-white text-primary rounded-3 p-2 me-2"
                                style={{
                                    width: "45px",
                                    height: "45px"
                                }}
                            >
                                <FaTasks size={25} />
                            </div>

                            <div>
                                <h5 className="mb-0 fw-bold">
                                    TaskFlow
                                </h5>

                                <small className="text-white-50">
                                    Task Management
                                </small>
                            </div>

                        </div>

                        <p className="text-white-50">
                            Organize your tasks, manage your time,
                            and stay productive with TaskFlow.
                        </p>

                    </div>


                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">

                        <h6 className="fw-bold mb-3">
                            Quick Links
                        </h6>

                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <FaHome className="me-2" />
                                    Home
                                </a>
                            </li>

                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <FaList className="me-2" />
                                    All Tasks
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-white-50 text-decoration-none"
                                >
                                    <FaCheckCircle className="me-2" />
                                    Completed
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* Features */}
                    <div className="col-lg-3 col-md-6">

                        <h6 className="fw-bold mb-3">
                            Features
                        </h6>

                        <p className="text-white-50 mb-2">
                            ✓ Create Tasks
                        </p>

                        <p className="text-white-50 mb-2">
                            ✓ Edit Tasks
                        </p>

                        <p className="text-white-50 mb-2">
                            ✓ Track Progress
                        </p>

                        <p className="text-white-50 mb-0">
                            ✓ Manage Completed Tasks
                        </p>

                    </div>


                    {/* Social Media */}
                    <div className="col-lg-3 col-md-6">

                        <h6 className="fw-bold mb-3">
                            Follow Us
                        </h6>

                        <p className="text-white-50">
                            Stay connected with us
                        </p>

                        <div className="d-flex gap-2">

                            <a
                                href="#"
                                className="btn btn-light rounded-circle"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="#"
                                className="btn btn-light rounded-circle"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="#"
                                className="btn btn-light rounded-circle"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>

                </div>


                {/* Divider */}
                <hr className="border-light opacity-25 mt-4" />


                {/* Bottom Section */}
                <div className="row align-items-center">

                    <div className="col-md-6 text-center text-md-start">

                        <p className="mb-0 text-white-50">
                            © 2026 TaskFlow. All Rights Reserved.
                        </p>

                    </div>

                    <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">

                        <span className="text-white-50">
                            Built with ❤️ using React & Redux
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer1