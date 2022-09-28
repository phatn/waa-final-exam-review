import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
const axios = require('axios').default;


export default function AddJob() {

    const nav = useNavigate();

    const [jobsState, setJobsState] = useState({
        jobs: [], loaded: false
    });

    const [jobState, setJobState] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            setJobsState({...jobsState, loaded: false});
            const response = await axios.get(`http://localhost:8080/api/jobs`);
            setJobsState({...jobsState, jobs: response.data, loaded: true});
        }

        fetchData();
    }, [])

    const onSaveClicked = async () => {
        const response = await axios.post(`http://localhost:8080/api/jobs`, jobState);
        setJobsState({...jobsState, jobs: response.data, loaded: true});
    }

    const onChanged = (e) => {
        setJobState({ ...jobState, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {!jobsState.loaded ? <div>Loading...</div> :
                jobsState.jobs.map(job => {
                    return (
                        <p key={job.id}>{job.id} - {job.name} - {job.description} <button onClick={() => {nav(`/job/${job.id}`)}}>Detail</button></p>
                    )
                })
            }
            <p>Name: <input type='text' name='name' onChange={onChanged} /></p>
            <p>Description: <input type='text' name='description' onChange={onChanged} /></p>
            <button onClick={onSaveClicked}>Save</button>
        </div>
    )
}