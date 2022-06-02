import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

/*                     props.product.itemQuantity = itemQty
                    props.setTotal(parseInt(props.total) + 1) */

const QtyButton = (props) => {
  //   const [itemQty, setItemQty] = useState(1);
  //   const [totalPrice, setTotalPrice] = useState(0); // total price * qty of one product
  //   /*     useImperativeHandle(ref, () => ({
  //             handleqty: () => {
  //                 return thePrice;
  //             }
  //         })); */
  //   const [oldItemQty, setOldItemQty] = useState(1);

  //   useEffect(() => {
  //     //  localStorage.clear();
  //     props.setThePrice(props.prices);
  //     setTotalPrice(props.product.price * itemQty);
  //   }, []);

  //   useEffect(() => {
  //     setTotalPrice(props.product.price * itemQty);
  //     localStorage.setItem("itemQty", itemQty);
  //     props.product.itemQty = itemQty;
  //     if (itemQty === 0) {
  //       props.setTotal(props.total - 1); // -1 from navbar counter
  //       props.setThePrice(props.thePrice - totalPrice); // remove deleted amouint frm subtotal
  //       props.setProducts(
  //         props.products.filter((x) => x.id !== props.product.id)
  //       ); //filters out by product id clicked
  //       //     setItemQty(oldItemQty)

  //       // setItemQty(props.product.itemQty)
  //       // console.log("itemqty === 0")
  //     }
  //   }, [itemQty]);

  //   /*     useEffect(() => {
  //         if (itemQty == 0 ) {
  //         console.log(getNewProducts)
  //         }
  //     },[newProducts]) */

  //   useEffect(() => {
  //     localStorage.setItem("products", JSON.stringify(props.products));
  //   }, [props.products]);

  return (
    <div>
      {/*   <div className="font-bold py-2 px-4">Each Total: {eachTotal}</div> */}
      <button
        className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4"
        onClick={() => props.changeQty(props.product, props.product.qty + 1)}
      >
        +
      </button>
      <button
        className="bg-red-500 hover:bg-gray-400 font-bold py-2 px-4"
        onClick={() => props.changeQty(props.product, props.product.qty - 1)}
        disabled={props.product.qty < 2}
      >
        -
      </button>
      <div className=" font-bold py-2 px-4">
        Quantity: {props.product.qty} x {props.product.price} ={" "}
        {props.product.qty * props.product.price}{" "}
      </div>
      {/*      <div className=" font-bold py-2 px-4">total of each product {props.totalPrice} </div> */}
    </div>
  );
};

export default QtyButton;
