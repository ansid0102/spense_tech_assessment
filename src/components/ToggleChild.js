import { useState } from "react"

export default function ToggleChild(props){
    const [counter,setCounter]= useState(0);
    const decrement=()=>{
        if(counter>0){
            setCounter(counter-1);
        }
    }
    const increment=()=>{
        if(counter<8){
            setCounter(counter+1);
        }
    }
    return(
        <div id="childToggle">
            <div>
            <h4>{props.name}</h4>
        <h6>(Max of {props.count} members)</h6>
            </div>
            <button type="button" onClick={decrement}>-</button>
            <h3>{counter}</h3>
            <button type="button"id="plus" onClick={increment}>+</button>
        </div>

    )
}