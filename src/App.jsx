
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Players'
import Users from './Users'



function App() {
function handleClick() {
  alert('button cliked')
}
function handleClick2() {
  alert('button cliked button cliked2 ')
}

  return (
    <>
      <h2>React Core Consepts 2</h2>
      <Friends></Friends>

      <Users></Users>



      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Ckick Me</button>
      <button onClick={handleClick2}>Ckick Me 2</button>
      <button onClick={() => {alert('Third ckicked')}}>Ckick Me 3</button>
    </>
  )
}

export default App
