import { useState } from "react"
import Create from "./components/Create"
import Show from "./components/Show"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"


const App = () => {

  const [task, settasks] = useState(JSON.parse(localStorage.getItem('task')) || [])

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Show" element={<Show />} />
        {/* <Route path="/Filter" element={<Filter />} /> */}
      </Routes>

      {/* <h2>Create Expenses</h2>
    <Create expenses={expenses} setexpenses={setexpenses} />
    <hr />
    <h2>Filter expenses here:</h2>
    <Filter expenses={expenses} setexpenses={setexpenses} />
    <hr />
    <h2>See all Expenses here:</h2>
    <Show expenses={expenses} setexpenses={setexpenses}/> */}
    </div>
  )
}

export default App