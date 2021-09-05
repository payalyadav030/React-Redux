// This input component file is for understanding the working of redux from lec12
import React from "react";
import  { connect } from "react-redux";

function Input(props){
    console.log("hereee", props);
    return(
        <div>
            {/* here {props.userName} */}
            <input type="text" placeholder="Enter your name here" value={props.name}
            onChange={(event)=>props.dispatch({type:"change_user_name", payload:event.target.value})}></input>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        name:state.name
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        dispatch:dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input)