import React from "react";
import classes from "./CartDetails.module.css"

 
const Details=(props)=>{

    return (
        <div className = {classes.details}>
            <h5>Total Amount: {props.amount}</h5>
            <button onClick={props.checkout.bind()}>Checkout</button>
            <h5>Quantity: {props.quantity}</h5>
           
        </div>
    )
}

export default Details;