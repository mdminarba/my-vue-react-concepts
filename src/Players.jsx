import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);



    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleReduce = () =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }



    const setStyle = {
        border: '2px solid tomato ',
        padding: '20px',
        margin: '30px',
        background: 'yellow',
        borderRadius:'15px',
        color: 'red'
    }
    return(
        <div style={setStyle}>
             <h3>Players : {team} </h3>
             <button onClick={handleAdd}>Add</button>
             <button  style={{margin:'10px'}} onClick={handleReduce}>Reduce</button>
        </div>
       
    )
}