/* 
function ChangeFunction() {
   for(let i = 1; i <= 10 ; i++){
       
   } */
   
   
function handleChange(e) {
    console.log(e)
}


export default function Dropdown(props) {
    const options = [
        {value: '1', text: '1'},
        {value: '2', text: '2'},
        {value: '3', text: '3'},
        {value: '4', text: '4'},
        {value: '5', text: '5'},
        {value: '6', text: '6'},
        {value: '7', text: '7'},
        {value: '8', text: '8'},
        {value: '9', text: '9'},
        {value: '10', text: '10'}
    ]
    return (
        <>
        <span>Qty:</span>
        <select  value={props.qty} onChange={handleChange}>
        {options.map( (e) => {
            return <option key={e.value} value={e.value}>
                {e.text}
                </option>
        })}

        </select>
        </>

    )
}

{/*             <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option> */}