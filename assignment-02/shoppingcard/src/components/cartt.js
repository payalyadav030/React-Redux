import React, { Component } from 'react';
import Items from './items';
import ButtonComp from './Button';


class Cart extends Component{
    render(){
        return(
            <div  className="cart-div">
                <ul className="ul">
                    <h3>CARTS</h3>
                    {this.props.getCartList.map((carts, index)=>{
                       return(
                        <div className="cart-div-2">
                           
                        
                                <li  className="cart-div-4" key={index}>
                                <p>{carts.items}</p>
                                <span className="cart-cost">Cost: ₹{carts.cost}</span>
                                <div className="remove-btn">
                                    <ButtonComp
                                    title={"Remove"}
                                    color={"secondary"}
                                    onClick={()=>this.props.removeFromCart(index)}
                                    />
                                </div>
                                </li>
                            
                        </div>
                        
                       )
                    })}
                </ul>
            </div>
        )
    }
}


export default Cart;