import { Component } from "react";
import "./index.css"

class Counter extends Component{
    state={count:0}


    onIncriment=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }

    onDecriment=()=>{
        this.setState(prevState=>{
            return{count:prevState.count-1}
        })

    }



    render(){
        const{count}=this.state
        return(
            <div className="bg_container">
                <h1 className="head">COUNTER</h1>
                <p className="para">{count}</p>
                <div>
                    <button className="button" onClick={this.onIncriment}>incriment</button>
                    <button className="button" onClick={this.onDecriment}>decriment</button>
                </div>

            </div>
        )
    }
}

export default Counter