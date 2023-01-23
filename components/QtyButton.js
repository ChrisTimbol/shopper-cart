const QtyButton = (props) => {
  return (
    <div className="flex">
      <div className="ButtonContainer">
        <button
          className="focus:outline-none focus:ring focus:ring-green-600 bg-purple-600 hover:bg-green-400 font-bold py-1 px-4 ml-4  rounded-md"
          onClick={() => props.changeQty(props.product, props.product.qty + 1)}
        >+</button>
        <button
          className="focus:outline-none focus:ring focus:ring-red-700 bg-purple-600 hover:bg-red-600 font-small py-1 px-4 rounded-md"
          onClick={() => props.changeQty(props.product, props.product.qty - 1)}
          //   disable decrease button when qty equals to 1
          disabled={props.product.qty < 2}
        >-</button>
      </div>

      {/* Multiply individual product price with qty  */}
      <div className="text-sm flex items-center">
        <span className="ml-2 font-medium underline decoration-pink-500 	">Qty: {props.product.qty}</span>{/*  x ${props.product.price} ={" "} */}
{/*         ${props.product.qty * props.product.price}{" "} */}
      </div>
    </div>
  );
};

export default QtyButton;

