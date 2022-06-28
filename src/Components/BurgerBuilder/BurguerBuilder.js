import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './BurgerBuilder.css';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90
};

export default class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ],
        totalPrice: 80,
        show: false
    }

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) item.amount++;
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice })
    }

    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return
                item.amount--;
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice })
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
                    <Burger ingredients={this.state.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.state.totalPrice}
                        showModal={this.toggleModal}
                    />
                </div>
                <Modal isOpen={this.state.open} show={this.state.show}>
                    <Modal.Header>Your Order Summary</Modal.Header>
                    <Modal.Body>
                        <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
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