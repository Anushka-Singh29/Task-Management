/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

//creating context
// eslint-disable-next-line react-refresh/only-export-components
export const taskContext = createContext()

const Context = (props) => {
  const [task, settasks] = useState(JSON.parse(localStorage.getItem('expenses')) || [])
  return (
    <taskContext.Provider value={[task, settasks]}>
      {props.children}
    </taskContext.Provider>
  )
}

export default Context