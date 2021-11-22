import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Headers.css';
import { useNavigate } from 'react-router';
const Header = () => {
    const { allFirebase } = useAuth();
    const { user, logout } = allFirebase;
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(navigate)
    }
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Pikary Bazar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto main-menu">
                        <NavLink
                            className="menu"
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="menu"
                            to="/explore"
                        >
                            Explore
                        </NavLink>
                        {user.email &&
                            <NavLink
                                className="menu"
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                        }
                        {!user.displayName ?
                            <NavLink to='/login'>
                                <button className="btn my-btn login-btn btn-sm">Login</button>
                            </NavLink>
                            :
                            <div>
                                <img className="user-photo" src={user.photoURL} alt="" />
                                <button onClick={handleLogout} className="btn my-btn login-btn btn-sm">Logout</button>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;