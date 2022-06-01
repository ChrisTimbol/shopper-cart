
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

/*                     props.product.itemQuantity = itemQty
                    props.setTotal(parseInt(props.total) + 1) */


const QtyButton = forwardRef((props, ref) => {
    const [itemQty, setItemQty] = useState(1)

    /*     useImperativeHandle(ref, () => ({
            handleqty: () => {
                return thePrice;
            }
        })); */


    useEffect(() => {
        props.setThePrice(props.prices)
    }, [])


    return (
        <div>
            {/*   <div className="font-bold py-2 px-4">Each Total: {eachTotal}</div> */}
            <button className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4"
                onClick={() => {
                    setItemQty(itemQty + 1)

                    props.setThePrice(props.thePrice + props.product.price + 1)
                }}>+</button>
            <button className="bg-red-500 hover:bg-gray-400 font-bold py-2 px-4" onClick={() => {
                if (itemQty > 1) {
                    setItemQty(itemQty - 1)

                    props.setThePrice(props.thePrice - props.product.price)
                }

            }}>-</button>
            <div className=" font-bold py-2 px-4">Quantity: {itemQty} </div>

        </div>
    )
})

export default QtyButton