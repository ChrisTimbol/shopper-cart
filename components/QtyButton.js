const QtyButton = (props) => {
    return (
      <div>
        <button
          className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4  rounded-full"
          onClick={() => props.changeQty(props.product, props.product.qty + 1)}
        >+</button>
        <button
          className="bg-red-500 hover:bg-gray-400 font-bold py-2 px-4  rounded-full"
          onClick={() => props.changeQty(props.product, props.product.qty - 1)}
          //   disable decrease button when qty equals to 1
          disabled={props.product.qty < 2}
        >-</button>
        {/* Multiply individual product price with qty  */}
        <div className=" font-bold py-2 px-4 ">
          Quantity: {props.product.qty} x {props.product.price} ={" "}
          {props.product.qty * props.product.price}{" "}
        </div>
      </div>
    );
  };
  
  export default QtyButton;
  
