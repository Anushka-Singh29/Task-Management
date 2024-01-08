import { useContext } from "react";
import { taskContext } from "../utils/context";


const Show = () => {
    const [task]= useContext(taskContext);

    // const deleteHandler = (index) => {

    //     const copyexpense = [...expenses]
    //     copyexpense.splice(index, 1)
    //     setexpenses(copyexpense)
    // }
    return (
        <>
            <h2>Showing Tasks here:</h2>
            <h2>
               
                <ol>
                    {task.length == 0 ? "No data present" : task.map((e, index) => (
                        <li key={index}>
                            {e.remark}{""} <span style={{ color: 'red' }}>Close</span>
                        </li>
                    ))}
                </ol>
            </h2>

        </>
    )
}

export default Show