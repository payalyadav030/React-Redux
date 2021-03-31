/// lecture -05 about life cycle component and CDM

class Header extends React.Component{
    constructor(){
        super()    // borrow features from react.component
        console.log("Header constructor")
    }
    componentDidMount=()=>{
        console.log("header CDM")
    }
    componentWillUnmount=()=>{
        console.log("header componentWillMount")
    }

    render(){
        console.log("header render")
        return(
            <div>
                Header
            </div>
        )
    }
}

class Wrapper extends React.Component{
    constructor(){
        super()    // borrow features from react.component
        console.log("wrapper constructor")
        this.state={showHeader:true}
    }
    componentDidMount=()=>{
        console.log("wrapper CDM")
    }
    /* shouldComponentUpdate - expected output- true/false*/  
    shouldComponentUpdate=()=>{
        console.log(" wrapper shouldComponentUpdate");
        return true
    }
    
    componentDidUpdate=()=>{
        console.log("wrapper componentDidUpdate ")
    }

    state={showHeader:true}
    render(){
        console.log("wrapper render")
        return(
            <div>
                wrapper
                {this.state.showHeader && <Header/>}
                <button onClick={()=>this.setState({showHeader: !this.state.showHeader})}>Hide/Show Header</button>
            </div>
        )
    }
}

ReactDOM.render(<Wrapper/>, document.getElementById('root'))