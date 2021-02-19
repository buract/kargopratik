import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'



function Header1() {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.svg')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <Nav className="navigation">
                                            
                                            <Nav.Item><Link to={'/how-it-works'}>How it Works</Link></Nav.Item>
                                            <Nav.Item><Link to={'/wallet'}>FAQ</Link></Nav.Item>
                                        </Nav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn">
                                        <Link className="btn text-primary" to={'/signin'}>Login</Link>
                                        <Link className="btn btn-primary" to={'/signin'}>Sign up</Link>
                                        
                                    </div>
                                </Navbar>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1;