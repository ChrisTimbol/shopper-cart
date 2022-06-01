
import { useEffect, useState } from 'react';


export default function QtyButton(props) {
    const [itemQty, setItemQty] = useState(1)
    
    return (
        <div>
            <button className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4"
                onClick={() => {
                    setItemQty(itemQty + 1)
                    props.product.itemQuantity = itemQty
                    props.setTotal(parseInt(props.total) + 1)
                }}>+</button>
            <button className="bg-red-500 hover:bg-gray-400 font-bold py-2 px-4" onClick={() => {
                if (itemQty > 0) {
                setItemQty(itemQty - 1)
                }
                props.product.itemQuantity = itemQty
                props.setTotal(parseInt(props.total) - 1)
            }}>-</button><div>Quantity: {itemQty}</div>
            
        </div>
    )
}