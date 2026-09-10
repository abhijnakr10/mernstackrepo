function TaskCard(props) {
    return (
        <div className="task-card">
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
            <h3>{props.status}</h3>
        </div>
    );
}

export default TaskCard;