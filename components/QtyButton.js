
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
    const [oldItemQty, setOldItemQty] = useState(1);
      
    useEffect(() => {
        //  localStorage.clear();
        props.setThePrice(props.prices)
        setTotalPrice(props.product.price * itemQty)
    }, [])

    
    useEffect(() => {

        setTotalPrice(props.product.price * itemQty)
        localStorage.setItem("itemQty", itemQty)
        props.product.itemQty = itemQty
        if (itemQty === 0) {
            props.setTotal(props.total - 1) // -1 from navbar counter
            props.setThePrice(props.thePrice - totalPrice) // remove deleted amouint frm subtotal
            props.setProducts(props.products.filter((x) => x.id !== props.product.id))//filters out by product id clicked
       //     setItemQty(oldItemQty)
   
          
        // setItemQty(props.product.itemQty)
           // console.log("itemqty === 0")
        }
    }, [itemQty])

/*     useEffect(() => {
        if (itemQty == 0 ) {
        console.log(getNewProducts)
        }
    },[newProducts]) */

    useEffect(() => {

        localStorage.setItem("products", JSON.stringify(props.products))

    }, [props.products])

    return (
        <div>
            {/*   <div className="font-bold py-2 px-4">Each Total: {eachTotal}</div> */}
            <button className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4"
                onClick={() => {
                    setItemQty(itemQty + 1)
                    setTotalPrice(totalPrice + (props.product.price * itemQty))
                    props.setThePrice(props.thePrice + props.product.price )
                
            //        setOldItemQty(props.next.itemQty)
                
  
                }}>+</button>
            <button className="bg-red-500 hover:bg-gray-400 font-bold py-2 px-4" onClick={() => {
                if (itemQty > 0) {
                    setItemQty(itemQty - 1)
                    setTotalPrice(totalPrice - (props.product.price * itemQty))
                    props.setThePrice(props.thePrice - props.product.price)
            
               //     setOldItemQty(props.next.itemQty)
      
                }
            }}>-</button>
            <div className=" font-bold py-2 px-4">Quantity: {itemQty} x {props.product.price} = {totalPrice} </div>
            {/*      <div className=" font-bold py-2 px-4">total of each product {props.totalPrice} </div> */}
        </div>
    )
})

export default QtyButton