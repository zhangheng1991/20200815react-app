import React,{useState , createContext , useContext,useEffect } from "react";
import {connect} from "dva";
const CountContext = createContext()
function LndexChildren(props){
    useEffect(()=>{
        // console.log(props)
    })
    // console.log(props)
    // console.log(useContext)
    const count = useContext(CountContext)
    // console.log(count)
    return(
    <div>{count}8888{props.value}</div>
    )
}

export default LndexChildren;