import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovieRecommendation} from "./redux/userSlice";

export default function MovieRecommendation() {

    const dispatch = useDispatch();

    const tokenState = useSelector((state) => state.auth);

    const moviesState = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getMovieRecommendation(tokenState.key));
    }, [])

    return (
        <div>
            {!moviesState.loadedMovies ? <div>Loading...</div>:
                moviesState.movies.map(movie => {
                    return (
                        <p key={movie.key}>id: {movie.id} - title: {movie.title} - genre: {movie.genre} </p>
                    )
                })
            }
        </div>

    )
}