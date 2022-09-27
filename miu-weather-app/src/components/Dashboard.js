import {Link} from "react-router-dom";

export default function Dashboard() {

    return (
        <div>
            <ul>
                <li><Link to='/weathers'>Weathers</Link></li>
                <li><Link to='/add-job'>Add Job</Link></li>
            </ul>
        </div>
    )
}