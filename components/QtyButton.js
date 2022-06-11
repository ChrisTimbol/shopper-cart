const QtyButton = (props) => {
    return (
      <div className="flex">
        <div className="incrementButtonContainer ">
        <button
          className="bg-green-400 hover:bg-gray-400 font-bold py-1 px-4  rounded-md"
          onClick={() => props.changeQty(props.product, props.product.qty + 1)}
        >+</button>
        <button
          className="bg-red-500 hover:bg-gray-400 font-bold py-1 px-4 rounded-md"
          onClick={() => props.changeQty(props.product, props.product.qty - 1)}
          //   disable decrease button when qty equals to 1
          disabled={props.product.qty < 2}
        >-</button>
        </div>

        {/* Multiply individual product price with qty  */}
        <div className=" font-normal py-3 px-4 flex">
          <span className="font-bold px-1 ">{props.product.qty}</span> x ${props.product.price} ={" "}
          ${props.product.qty * props.product.price}{" "}
        </div>
      </div>
    );
  };
  
  export default QtyButton;
  
