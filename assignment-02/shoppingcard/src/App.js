// # Shopping Cart Assignment

// 1. Create a static (with static data) web app using React.
// 2. Add a static header section
// 3. The app will contain 2 vertical sections (columns).
// 4. The left column will have a list of items with:
//    1. item name
//    2. cost
//    3. Add to cart button
// 5. The right column will contain the dynamic cart which will contain the list of added items and the total cost of all cart items.
// 6. In the right column, against every item, there should be a button to remove the item from cart.
// 9. Both left(item-list) and right(cart) sections should be individually scrollable if the list of items in either exceeds the viewport.
// 10. A checkout button at the bottom of the cart which should clear the cart.


import './App.css';
import React, { Component } from 'react';
import Items from './components/items';
// import Cart from './components/cart';
import Cart  from './components/cartt';
import TotalCost from './components/totalcost';

class App extends Component{
  state={
    itemsList:[
      {
        items: "SHAMPOO REAL",
        cost:"280"
      },
      {
        items: "REAL JUICE",
        cost:"400"
      },
      {
        items: "MOUSE PAD",
        cost:"180"
      },
      {
        items: "STORY BOOKTELLER",
        cost:"150"
      },
      {
        items: "KITTEN BOX",
        cost:"500"
      },
    ],
    cartList:[],
    isTotal:""
  }

  ////////////  add To Cart  ///////////////////////////
  addToCartList=(index)=>{
    console.log("Click on item", index)
    //let cart=[]
    let carts = this.state.itemsList[index];
    console.log(carts)
    
    this.setState({
      cartList:[...this.state.cartList, carts]
    }, ()=>{
      console.log("carts", this.state.cartList)
    })
  }

  //////// remove cart items ///////
  removeFromCartList=(index)=>{
    //console.log("remove", index)
    let newCartList = this.state.cartList;
    newCartList.splice(index, 1)
    this.setState({
      cartList: newCartList
    }, ()=>{
    //  console.log("new cartlist", this.state.cartList)
    })
  }

  //// total cost ////
  calculateSum=()=>{
  let sum=  this.state.cartList.reduce((sum, val)=>{
      return sum =sum+parseInt(val.cost)
    }, 0)
    return sum;
  }

  /////////// render //////////////
  render(){
    return(
      <div className="main-div">
        <div className="header">
          <h2>SHOPPING CART</h2>
        </div>
      <div className="components">
          <div className="Items-Comp">
              <Items getItems= {this.state.itemsList}
               addToCart={(index)=>this.addToCartList(index)}
              //  totalCost ={(index)=>this.addTotal(index)}
              />
          </div>
          <div className="Cart-Comp">
              <Cart 
               getCartList = {this.state.cartList}
               removeFromCart={(index)=>this.removeFromCartList(index)} 
              />
          </div>
          <div className="total-comp">
              <TotalCost totalSum={this.calculateSum()}/>
          </div>
      </div>
      
        
         
      </div>
    )
  }
}
export default App;
