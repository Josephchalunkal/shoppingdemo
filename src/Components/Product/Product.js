import React from "react";
import classes from "./Product.module.css"

// component to create single product.
const Product=(props)=>{
    let {mainbox,discountbox,imagebox,contentbox,buttonsbox} = classes;

   let item = props.itemDetails;

    return (
        <div className={mainbox}>
            <div className={imagebox}>
                {<img src = {item.image} alt={item.itemName}/>}
            </div>
            <div className={contentbox}>
                <h3>{item.itemCompany||""}</h3>
                <h4>{item.itemName||""}</h4>
                <span>{item.itemQuantity||""}</span>
                <span>{item.itemMRP?"MRP "+item.itemMRP:null}</span>
                <span>{item.itemPrice?"Rs "+item.itemPrice:null}</span>
            </div>
            <div className={discountbox}>
                {item.itemDiscount?`${item.itemDiscount}% OFF`:null}
            </div>
            <div className={buttonsbox}>
                <button onClick={props.updateCart.bind(null,item.id,1)}>Add to Cart</button>
                <button  onClick={props.updateCart.bind(null,item.id,-1)} disabled={(item.quantity<1)?true:false}>-</button>
                <span>{item.quantity}</span>
                <button onClick={props.updateCart.bind(null,item.id,1)}>+</button>

            </div> 
        </div>
    )
}

export default Product;