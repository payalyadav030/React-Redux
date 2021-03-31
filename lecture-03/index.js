// props:
// const Button = (props) =>{
//     return(
//         <button>{props.name},{props.number}</button>
//     )
// }

// nw for more clearance, we will write the above functional button component to class component:
class Button extends React.Component{
    render(){
        return(
            <button>{this.props.name},{this.props.number}</button>
        )
    }
}

class Footer extends React.Component{
    // suppose we want keep upadte that when the component was created:
    state = { time: new Date().toLocaleString() }
    myrender(){
        return(
            <div className="container-fluid p-0">
                <div className="my-footer">
                    Copyright @2021
                    {/* <Button tittle="new"/> */}
                    {this.state.time}
                    <Button name="Payalll" number="10" />   
                </div>
            </div>
        )
    }
}

ReactDOM.render((new Footer()).myrender(), document.getElementById('root'))