import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        }
    }

    inputChangeHandler = e => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = () => {
        console.log(this.state.values);
    }

    render() {
        return (
            <div>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Address" onChange={(e) => this.inputChangeHandler(e)}></textarea>
                    <br />
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(e) => this.inputChangeHandler(e)} />
                    <br />
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select>
                    <br />
                    <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto" onClick={this.submitHandler} >Place Order</Button>
                    <Link to={-1}>
                        <Button style={{ backgroundColor: "#666362" }} className="ml-1" >Cancel</Button>
                    </Link>
                </form>
            </div >
        )
    }
}
export default Checkout;