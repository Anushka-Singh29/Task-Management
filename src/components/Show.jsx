import { useContext } from "react";
import { taskContext } from "../utils/context";

import '../App.css'


const Show = () => {
    const [task]= useContext(taskContext);

    // const deleteHandle = (index) => {
    //     // const newUser = { username, city, gender }
    
    //     const copytask = [...task]
    //     copytask.splice(index, 1);
    //     settasks(copytask)
    //   }
    return (
        <div className="showpage">
            <h2>Showing Tasks here:</h2>
            <h2>
               
                <ol>
                    {task.length == 0 ? "No data present" : task.map((e, index) => (
                        <li key={index}>
                            {e.remark}{""} 
                            {/* <span  style={{ color: 'red' }}>Close</span> */}
                        </li>
                    ))}
                </ol>
            </h2>

        </div>
    )
}

export default Show