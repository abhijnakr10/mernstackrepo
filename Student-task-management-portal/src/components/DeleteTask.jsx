import { useState } from "react";

export default function App(){
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    function addTask(e){
        e.preventDefault();
        if(!title) return;
        setTasks([...tasks, { id: Date.now(), title: title }]);
        setTitle("");
    }

    
    return (
        <div style={{ padding: "20px" }}>
            <h1>Task Manager</h1>
            <form onSubmit={addTask}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}