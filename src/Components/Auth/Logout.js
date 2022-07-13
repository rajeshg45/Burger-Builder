import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/authActionCreators";

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (
            <Routes>
                <Route path="/logout" element={<Logout />} />
                <Route path="/logout" element={<Navigate replace to="/login" />} />
            </Routes>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);