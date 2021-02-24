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
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.svg').default} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="justify-content-between">
                                        <Nav className="navigation  ">
                                            
                                            <Nav.Item><Link className="text-primary" to={'/how-it-works'}>Nasıl Gönderirim?</Link></Nav.Item>
                                            <Nav.Item><Link className="text-primary" to={'/faq'}>SSS</Link></Nav.Item>
                                            
                                            
                                                

                                            
                                        </Nav>
                                        <Nav className="navigation ">
                                            
                                            <Nav.Item><Link className="btn text-primary" to={'/sign-in'}>Giriş Yap</Link></Nav.Item>
                                            <Nav.Item className="ml-0"><Link className="btn  btn-primary" to={'/sign-up'}>Kayıt Ol</Link></Nav.Item>
                                            
                                                

                                            
                                        </Nav>

                                    </Navbar.Collapse>

                                    
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