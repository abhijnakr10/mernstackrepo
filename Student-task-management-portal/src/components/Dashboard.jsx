import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashboard() {
    const tasks=[{
        id:1,
        title:"Learn React",
        description:"Understanding Components",
        status:"Compeleted"},
        {
            id:2,
            title:"Learn Mongodb",
            description:"Understanding databases",
            status:"Ongoing"
            },
        {
            id:3,
            title:"Learn javascript",
            description:"Understanding Variables",
            status:"Pending"
        }];
    return (
        <main>

            <div className="stats-container">
                <StatCard title={"Total Tasks"} 
                value={"10"}/>
                <StatCard title={"Completed"}
                value={6}/>
                <StatCard title={"Pending"} 
                value={4} />
            </div>

            <h2>Recent Tasks</h2>

            <div className="tasks-container">
    {tasks.map((task) => (
        <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
        />
    ))}
</div>
           

        </main>
    );
}

export default Dashboard;
