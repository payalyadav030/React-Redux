// import React, { Component } from 'react';
// import Items from './items';


// class Cart extends Component{
//     render(){
//         return(
//         <div className="cart-div">
//             <ul>
//                {/* {console.log(this.props.getCartList)} */}
//                <List removeFromCart={this.props.removeFromCart} getCartList={this.props.getCartList}/>
//            </ul>
//            {/* <div>
//                <TotalCost totalcost={this.props.totalcost}/>
//            </div> */}
//         </div>
//         )
//     }
// }
// // const TotalCost = ({totalcost})=>{
// //     return(
// //         <>

// //         </>
// //     )
// // }

// const List = ({getCartList,removeFromCart}) => {
//     return (
//         <>
//             {getCartList.map((carts, index)=>{
//                 return(
//                     <Card index={index} items={carts.items} cost={carts.cost} removeFromCart={removeFromCart}
                   
//                      />
//                 )
//             })}
//         </>
//     )
// }
// const Card = ({index,items,cost,removeFromCart}) => {
//     return(
//                     <div>
//                         <div>
//                             <li key={index}>
//                                 Item: {items}
//                                 cost: {cost}
//                                 <button onClick={()=> removeFromCart(index)}>Remove</button>
//                             </li>
//                         </div>
//                     </div>
//     )
// }
// export default Cart;