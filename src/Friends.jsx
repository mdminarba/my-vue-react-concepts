import { useEffect, useState } from 'react'
import './css.css'
import Friend from './Friend'
export default function Friends() {
const [friends, setfriends ] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setfriends(data))
},[])
   return(
    <div className="setStyle"><h3>Friends: {friends.length} </h3>
     {
        friends.map(friends => <Friend friend={friends} ></Friend>)
    }
    </div>
   
   ) 
}