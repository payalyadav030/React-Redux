import React, { Component } from 'react';
import ButtonComp from './Button';



class Items extends Component{
    render(){
        return(
                
               <ul className="Items-ul">
                   <h3>ITEMS</h3>
                   {this.props.getItems.map( (items, index)=>{
                      // console.log(this.props.getItems)
                       return (
                        <div className="items-Divs">
                            <li className="items-li"
                                key={index}> <p> {items.items}</p>
                               <span className="cost">Cost: ₹{items.cost}</span> 
                               <span className="add-button">
                                   <ButtonComp 
                                   title={"Add to Cart"} 
                                   color={"primary"}
                                   onClick={()=>this.props.addToCart(index)}
                                   />
                               </span>
                           </li>
                        </div>    
                       )
                   })}
               </ul>
           
        )
    }
}

export default Items;



{/* <button className="add-btn"
                                onClick={()=>this.props.addToCart(index)} 
                               
                                > Add</button> */}