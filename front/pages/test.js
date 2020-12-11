
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";



export default function Test () {

useEffect( () => {
    console.log("toto")
    const onMouseMove = e => {
        console.log(e)
    }
    window.addEventListener('mousemove', onMouseMove)
}, [] );

    return (
        <>
    
        <SearchBar/>
       
        </>
    )
}