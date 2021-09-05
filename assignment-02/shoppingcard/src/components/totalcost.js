import React, { Component } from 'react';
import Items from './items';


class TotalCost extends Component{
    render(){
        return(
            <div>
               <h3>TOTAL COST(₹)</h3> 
              <p className="totalcost">₹ {this.props.totalSum}</p> 
            </div>
        )
    }
}

export default TotalCost