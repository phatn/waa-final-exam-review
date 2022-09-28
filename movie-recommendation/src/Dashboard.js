import {Link} from "react-router-dom";

export default function Dashboard() {

    return (

        <div>
            <ul>
                <li><Link to='/logout'>Logout</Link></li>
                <li><Link to='/welcome'>Welcome</Link></li>
            </ul>
        </div>
    )
}