import { useContext, useState } from "react"
import { taskContext } from "../utils/context";


const Create = () => {
    const [task, settasks]= useContext(taskContext);
    const [remark, setremark] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        const newtask = { remark, }
        const copytask = [...task]
        copytask.push(newtask)
        settasks(copytask)

        localStorage.setItem('task', JSON.stringify(copytask))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input

                style={{height:'50px', width:'190px', margin:'20px 20px' }}
                    onChange={(e) => setremark(e.target.value)}
                    value={remark}
                    type="text"
                    placeholder="Enter Task and Description" />
            
                <button style={{height:'50px', width:'150px', margin:'20px 20px', backgroundColor:'#98D2EB' }}>Add Task</button>
            </form>
        </div>
    )
}

export default Create