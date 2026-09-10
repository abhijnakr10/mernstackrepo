import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import Welcome from "./components/Welcome"
import TaskCard from "./components/TaskCard";
import Dashboard from "./components/Dashboard";
import "./App.css"

function App(){
    return(
        <div>
            <Navbar/>
            <Welcome/>
            <StatCard/>
            <TaskCard/>
            <Dashboard/>
            </div>
    );
}
export default App;