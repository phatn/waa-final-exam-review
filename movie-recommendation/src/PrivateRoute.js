import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export const PrivateRoute = ({children}) => {

    const tokenState = useSelector((state) => state.auth);
    const nav = useNavigate();
    useEffect(() => {
        if(!tokenState.loggedIn) {
            nav('/login');
        }
    }, [])

    return children;
}