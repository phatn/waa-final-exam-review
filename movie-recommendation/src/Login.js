import {useDispatch} from "react-redux";
import {storeToken} from "./redux/tokenSlice";

export default function Login() {

    const dispatch = useDispatch();

    const onLoginClicked = () => {
        dispatch(storeToken('123.abc.xyz'));
    }

    return (
        <div>
            <p>Login Component</p>
            <button onClick={onLoginClicked}>Login</button>
        </div>
    )
}