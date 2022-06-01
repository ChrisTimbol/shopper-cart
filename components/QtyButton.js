
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

/*                     props.product.itemQuantity = itemQty
                    props.setTotal(parseInt(props.total) + 1) */


const QtyButton = forwardRef((props, ref) => {
    const [itemQty, setItemQty] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0) // total price * qty of one product
    /*     useImperativeHandle(ref, () => ({
            handleqty: () => {
                return thePrice;
            }
        })); */


    useEffect(() => {
      //  localStorage.clear();
        props.setThePrice(props.prices)
      //  setItemQty(parseInt(localStorage.getItem("itemQty")))
        setTotalPrice(props.product.price * itemQty)
    }, [])

    useEffect(() => {
      
        setTotalPrice(props.product.price * itemQty)
        localStorage.setItem("itemQty", itemQty)
    }, [itemQty])

    useEffect(() => {

    })

    return (
        <div>
            {/*   <div className="font-bold py-2 px-4">Each Total: {eachTotal}</div> */}
            <button className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4"
                onClick={() => {
                    setItemQty(itemQty + 1)
                    setTotalPrice(totalPrice + (props.product.price * itemQty))
                    props.setThePrice(props.thePrice + props.product.price + 1)
                   // props.setTotal(parseInt(props.total) + 1)
                }}>+</button>
            <button className="bg-red-500 hover:bg-gray-400 font-bold py-2 px-4" onClick={() => {
                if (itemQty > 1) {
                    setItemQty(itemQty - 1)
                    setTotalPrice(totalPrice - (props.product.price * itemQty))
                    props.setThePrice(props.thePrice - props.product.price)
                  //  props.setTotal(parseInt(props.total) - 1)
                }

            }}>-</button>
            <div className=" font-bold py-2 px-4">Quantity: {itemQty} x {props.product.price} = {totalPrice} </div>
       {/*      <div className=" font-bold py-2 px-4">total of each product {props.totalPrice} </div> */}
        </div>
    )
})

export default QtyButton