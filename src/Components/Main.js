import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurguerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Main = props => {
    let routes = null;
    if (props.token === null) {
        routes = (
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route render={() => <Navigate to="/login" />} />
            </Routes>
        )
    } else {
        <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" index element={<BurgerBuilder />} />
        </Routes>
    }
    return (
        <div>
            <Header />
            <div className="container">
                {routes}
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(Main);