import React, { Component } from 'react'
import './App.css';
import Product from "./Components/Product/Product"
import CartDetails from "./Components/CartDetails/CartDetails"
import CheckoutCart from "./Components/CheckoutCart/CheckoutCart"
import{Items} from "./data/Items"




export class App extends Component {
//setting intail state
  state = {
    productList:Items,
    cartItems:[],
    cartQuantity:0,
    totalAmount:0,
    checkout:false,
    popup:false,
    error:false

  }
  // componentDidMount(){
    
  //   fetch(process.env.PUBLIC_URL+'data/Items.json').then(response => {
  //     console.log(response.data);
  //     return response.json();
  //   }).then(data => {
  //     console.log(data)
  //     this.setState({
  //       productList:data
  //     })
  //     console.log(data);
  //   }).catch(err => {
  //     this.setState({
  //       error:err
  //     })
  //   });
  
  // }
//updateCart functionality to handle the changes in the cart
  updateCart = (id,changedQuantity)=>{
    console.log(this.state.productList);
    let{cartItems,cartQuantity,totalAmount} = this.state
      let data=[...this.state.productList];
      let cartData=[...cartItems];
      let cartItem=cartData.find(a=>a.id===id);
      let itemDetails=data.find(a=>a.id===id);
      if(itemDetails.quantity===0 && changedQuantity===-1)return;
      itemDetails.quantity=itemDetails.quantity+changedQuantity;
      if(cartItem)cartItem.quantity=cartItem.quantity+changedQuantity;
      else cartData.push({...itemDetails});
      let total=totalAmount;
      let quantity=cartQuantity;
      total=Number(total)+(Number(itemDetails.itemPrice)*changedQuantity);
      quantity=quantity+changedQuantity;
      

      this.setState({
        cartItems:cartData,
        cartQuantity:quantity,
        totalAmount:total
      })
      
  }
  //to track the change when clicking on checkout button
  checkout = ()=>{
    this.setState({
    checkout:true
    })
  }
  //to move back from checkout page to cart page
  backFromcheckout =()=>{
    this.setState({
      checkout:false
    })
  }
// to show the popup
  buyFromCheckOut = ()=>{
    this.setState({
      popup:true
    })
  }

  //to clear the cart and set is back to intial state
  clearCart = ()=>{
    let cartReset = this.state.productList;
    cartReset.forEach(item=> {
      if (item.quantity !== 0) {
         item.quantity = 0;
      }
  });
    this.setState({
      productList:cartReset,
      cartItems:[],
      cartQuantity:0,
      totalAmount:0,
      checkout:true,
      popup:false
    })
  }

  render() {
    
    
    return (
      !this.state.error?
      !this.state.checkout?
      (<div className = "App">
        {this.state.productList&&this.state.productList.length&&this.state.productList.map(item=><Product 
        key={item.itemName}
         itemDetails={{...item}}
         updateCart = {this.updateCart}/>)} 
         <CartDetails amount={this.state.totalAmount}
         quantity={this.state.cartQuantity}
         checkout={this.checkout}/>
      </div>):
      (
        <div className= "App">
        <CheckoutCart data = {this.state.cartItems} 
        total={this.state.totalAmount}
         back={this.backFromcheckout} 
         popup={this.state.popup}
         buy={this.buyFromCheckOut}
         clearcart = {this.clearCart}/>
         </div>
      ):<h1>Something wrong happened. Be patient . We will be right back</h1>
      
    )
  }
}

export default App



