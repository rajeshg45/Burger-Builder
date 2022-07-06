import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from '../../assets/logo.png';
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Header = props => {
    let links = null;
    if (propTypes.token === null) {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink to="/" className="NavLink">Burger Builder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/orders" className="NavLink">orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login" className="NavLink">Login</NavLink>
                </NavItem>
            </Nav>
        )
    } else {
        <Nav className="mr-md-5">
            <NavItem>
                <NavLink to="/" className="NavLink">Burger Builder</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/orders" className="NavLink">orders</NavLink>
            </NavItem>
        </Nav>
    }
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand"><img src={Logo} alt="Logo" width="80px" /></NavbarBrand>
                {links}
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);