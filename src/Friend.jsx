import './css.css'
export default function Friend({friend}) {
console.log(friend)
    const {name, id,email,username } = friend
  return(
    <div className="Style">
        <h4>Name: {name} </h4>
        <h5>Email: {email}</h5>
        <h5>Username: {username}</h5>
        <h5>Address Street: {friend.address.street}</h5>
        <h5>Id:{id}</h5>
        <h5>Address: {friend.address.city}</h5>
        <h5>Address Suite: {friend.address.suite}</h5>
        <h5>Address Zipcode: {friend.address.zipcode}</h5>
        <h5>Address Geo: lat{friend.address.city[0]}</h5>
        <h5>Address geo: {friend.address.city[1]}</h5>
        <h5>Phone: {friend.phone}</h5>
        <h5>Website: {friend.website}</h5>
    </div>
  )  
}