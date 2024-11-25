import {useState} from "react"


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [doneTasks, setDoneTasks] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_,i)=> i !== index);
        setTasks(updatedTasks);
    }

    function editTask(index){
        
        const updatedTasks = tasks.filter((_,i)=> i !== index);
        setNewTask(tasks[index]);
        console.log(document.getElementById("input-tasks").value );
        
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function doTask(index){
       setDoneTasks([...doneTasks,tasks[index]]);
    //    console.log(tasks)
    }



    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} id="input-tasks"/>
                <button className="add-button" onClick={addTask}>Save</button>
            </div>

            <ol>
                {tasks.map((
                    task,index)=> <li key={index}>
                        {doneTasks.includes(task) ? <></>:<button className="edit-button" onClick={() => editTask(index)}>
                            Edit
                        </button>}
                        &nbsp;
                        {doneTasks.includes(task) ? <></>:<button className="add-button" onClick={() => doTask(index)}>
                            Do
                        </button>}
                        
                        
                        
                        
                        <span className={doneTasks.includes(task) ? "done-text":"text"}>{task}</span>
                        
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList
