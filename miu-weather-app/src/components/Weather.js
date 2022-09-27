import {useNavigate} from "react-router";

export default function Weather(props) {

    const {id, city, temperature} = props.data;

    const nav = useNavigate();

    const onDetailClicked = (id) => {
        nav(`/weather/${id}`);
    }

    return (
        <div>
            <p>{id} - {city} - {temperature} <button onClick={() => onDetailClicked(id)}>Detail</button></p>
        </div>
    )
}