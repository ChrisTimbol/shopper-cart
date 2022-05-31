/* 
function ChangeFunction() {
   for(let i = 1; i <= 10 ; i++){
       
   } */

import { useEffect, useState } from "react";

   
   
function handleChange(e) {
    
}


export default function Dropdown(props) {
    //starts as  value of prop 
    const [selectQty, setSelectQty] = useState(props.value);

    props.products.map( (e,i) => {
        if(e.id === props.id) {
        e.itemQty = selectQty
        }
        
    })

     useEffect(() => {
        localStorage.setItem("products",JSON.stringify(props.products)) 

    }, []) 

    useEffect(() => {
       localStorage.setItem("products",JSON.stringify(props.products)) 
        console.log(props.products)
    }, [selectQty])

    return (
        <>
        <span>Qty:</span>
        <select    value={props.value} onChange={ (e) => {
            setSelectQty(e.target.value)
        }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
        </select>
        </>

    )
}

