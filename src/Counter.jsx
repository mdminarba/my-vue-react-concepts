import { useState } from "react"

export default function Counter() {
    const [count, setcont] = useState(0);
    const handleAdd = () =>{
        const newcount = count + 1;
        setcont(newcount)

    }
    const handleReduce = () =>{
        const newcount = count - 1;
        setcont(newcount)

    }
  
    return(
        <div style={{border: '2px solid yellow', padding: '20px', margin: '30px',background: 'tomato', borderRadius:'15px'}}>
            <h3>Counter: {count} </h3>
            <button style={{margin:'10px'}} onClick ={handleAdd}>Add</button>
            <button onClick ={handleReduce}>Reduce</button>
        </div>
    )
}