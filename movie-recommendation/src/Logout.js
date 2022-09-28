import { useDispatch } from "react-redux";
import {removeToken} from "./redux/tokenSlice";

export default function Logout() {

    const dispatch = useDispatch();

    const onLogoutClicked = () => {
        dispatch(removeToken());
    }

    return (
        <div>
            <p>Logout Component</p>
            <button onClick={onLogoutClicked}>Logout</button>
        </div>
    )
}