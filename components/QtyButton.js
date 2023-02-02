
function QtyButton(props) {
  return (
    <>
      <div className="ml-2 font-medium underline decoration-pink-500  text-sm flex items-center	">Qty: {props.product.qty}</div>

      <div className="ButtonContainer">
        <button
          className="focus:outline-none focus:ring focus:ring-green-600 bg-purple-600 hover:bg-green-400 font-bold py-1.5 px-4 rounded-md"
          onClick={() => props.changeQty(props.product, props.product.qty + 1)}
        >+</button>
        <button
          className="focus:outline-none focus:ring focus:ring-red-700 bg-purple-600 hover:bg-red-600 font-bold py-1.5 px-4 rounded-md"
          onClick={() => props.changeQty(props.product, props.product.qty - 1)}
          //   disable decrease button when qty equals to 1
          disabled={props.product.qty < 2}
        >-</button>
      </div>






    </>
  )
}

export default QtyButton;

