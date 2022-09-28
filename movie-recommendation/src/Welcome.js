import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/userSlice";
import MovieRecommendation from "./MovieRecommendation";


export default function Welcome() {

    const tokenState = useSelector((state) => state.auth);

    const userState = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(tokenState.key));
    })

    return (
        <div>
            {!userState.user ? <div>Loading...</div>:
                <div>
                    <h2>User Information</h2>
                    <p>Email: {userState.user.email}</p>
                    <p>First Name: {userState.user.firstname}</p>
                    <p>Last Name: {userState.user.lastname}</p>
                </div>
            }

            <h2>Movies Recommendation</h2>
            <MovieRecommendation />
        </div>
    )
}