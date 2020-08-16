import React,{Fragment} from "react";
import classes from "./PopupCheckout.module.css";
// Final popup to be showed after buying.
const PopupCheckout=(props)=>{


    return (

    <Fragment>
        <div className={classes.popup} onClick={()=>{props.clearcart();}}>
            <span className={classes.closer} >&#10006;</span>
            <h3 style={{color:"maroon"}}>Thanks for Shopping here</h3>
            <h5 style={{color:"teal"}}>Rs {props.total} Amount Paid</h5>
            <h5>Please Visit Again!!!</h5>
            <h5>For any queries contact : 8129896521</h5>
        </div>
        <div className={classes.background} ></div>
    </Fragment>
    )
}

export default PopupCheckout;