import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './BurgerBuilder.css';
import Summary from "./Summary/Summary";
import { connect } from "react-redux";
import { addIngredient, removeIngredient, updatePurchaseable } from "../../redux/actionCreators";

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchaseable: state.purchaseable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchaseable: () => dispatch(updatePurchaseable())
    }
}

class BurgerBuilder extends Component {
    state = {
        show: false,
    }

    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchaseable();
    }

    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchaseable();
    }

    toggleModal = () => {
        this.setState({
            show: !false
        })
    }

    closeModal = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        showModal={this.toggleModal}
                        purchaseable={this.props.purchaseable}
                    />
                </div>
                <Modal isOpen={this.state.open} show={this.state.show}>
                    <Modal.Header>Your Order Summary</Modal.Header>
                    <Modal.Body>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={'/checkout'}>
                            <Button color="success">Continue To Checkout</Button>
                        </Link>
                        <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);