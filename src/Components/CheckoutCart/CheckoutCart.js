import React from "react";
import classes from "./CheckoutCart.module.css"
import PopupCheckOut from "../PopupCheckout/PopupCheckout"


const Checkout=(props)=>{


return (
    <div className={classes.mainbox}>
        <h2 className = {classes.receipthead}>Items Purchased</h2>
        {props.total?(<table className={classes.table} >
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
                <tbody>
                        {props.data.map((item,index)=>{
                        return <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemPrice}</td>
                                <td>{item.quantity}</td>                
                                <td>{Number(item.itemPrice)*item.quantity}</td>                
                            </tr>
                        })}
                        <tr><td colSpan={4}>Total Amount</td><td>Rs. {props.total}</td></tr>
                </tbody>
        </table>):<div className={classes.empty}>Nothing in Cart</div>}
        
        <button className={classes.buy}  disabled={props.total===0}onClick={props.buy.bind()}>Buy</button>
        <button onClick={props.back.bind()} >Back</button>
    
        {(props.popup)?<PopupCheckOut total={props.total} clearcart={props.clearcart} />:null} 
    </div>
    
    )
}

export default Checkout;