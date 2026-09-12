import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav>
            <h3>Student Task Portal</h3>
            <div className="nav-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/tasks"}>Tasks</Link>
            </div>
        </nav>
    );
}
export default Navbar;