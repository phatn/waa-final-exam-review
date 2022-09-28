import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {default as axios} from "axios";

export default function JobDetail() {

    const params = useParams();

    const [jobState, setJobState] = useState({
        job: null, loaded: false
    });

    const [job, setJob] = useState({
        id: '',
        name: '',
        description: ''
    });

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/api/jobs/${params.id}`);
            setJobState({...jobState, job: response.data, loaded: true});
            setJob(response.data);
        }

        fetchData();

    }, [])

    const onChanged = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        })
    }

    const onSaveClicked = async (id) => {
        console.log(JSON.stringify({...job, id: id}));
        const response = await axios.put(`http://localhost:8080/api/jobs`, {...job, id: id});
    }

    return(
        <div>
            {
                !jobState.loaded ? <div>Loading...</div> :

                    <div>
                        <p>Name: <input type='text' value={job.name} name='name' onChange={onChanged} /></p>
                        <p>Description: <input type='text' value={job.description} name='description' onChange={onChanged} /></p>
                        <button onClick={() => onSaveClicked(job.id)}>Save</button>
                    </div>

            }
        </div>
    )

}