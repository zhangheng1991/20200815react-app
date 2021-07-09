import React,{useState , createContext , useContext,useEffect } from "react";
import {connect} from "dva";
const CountContext = createContext()
function LndexChildren(props){
    useEffect(()=>{
       
    })
    const count = useContext(CountContext)
    return(
    <div>{count}8888{props.value}</div>
    )
}

export default LndexChildren;