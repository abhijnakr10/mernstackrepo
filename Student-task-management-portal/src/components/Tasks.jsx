function Tasks(props){
    return(
    <div>
        <h1>Tasks Page</h1>
        <p>All the students tasks will appear here</p>

        {
            props.tasks.map((task)=>(
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                </div>
            ))
        }
    </div>

    );

}
export default Tasks;