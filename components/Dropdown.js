import { useEffect, useState, useContext } from "react";
import { useBeforeunload } from 'react-beforeunload';



export default function Dropdown(props) {
    const [selectQty, setSelectQty] = useState(props.value)
    const [previousQty, setPreviousQty] = useState(1)

    props.products.map((e, i) => { // assigns itemQty based on dropdown selection in cart
        if (e.id === props.id) {
            e.itemQty = selectQty
        }
    })

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(props.products)) // when dropdown qty is added update the product in storage
        //    props.setProducts(JSON.parse(localStorage.getItem("products"))) // fixes the dropdown not updating after change in cart.js
    }, [selectQty])

    return (
        <>
            <span>Qty:</span>
            <select value={props.itemQty} onChange={(e) => {
                // if the previous quantity is smaller then new dropdown value then - that value from teh total
                if (previousQty < e.target.value) {
                    props.setTotal(props.total - (previousQty - parseInt(e.target.value)))

                }
                // if prev is larger
                else if (previousQty > e.target.value) {
                    props.setTotal(props.total + (parseInt(e.target.value) - previousQty))
                }
                else {
                    props.setTotal(props.total + parseInt(e.target.value))
                }
                setSelectQty(e.target.value)
                setPreviousQty(e.target.value)
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

