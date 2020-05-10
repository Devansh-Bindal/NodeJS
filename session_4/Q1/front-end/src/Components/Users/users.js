import React, { useState} from 'react';
import './user.css';
import Axios from 'axios';
import UserList from './userList/userList'

const Users = () => {
    const [sessionId, setSessionId] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();

    // setTimeout(() => {
    //     setMessage('')
    // }, 5000)
    setTimeout(() => {
        setSessionId('');
    }, 5000 * 30)
    

    const onDeleteHandler = (message) => {
        setMessage(message)
    }

    function startSessionHandler() {
        Axios.get('http://localhost:1345/session')
            .then(response => {
                let res= response.data;
                // console.log(response)
                setSessionId(res.sessionID);
                setMessage(res.message);
                onFetchUsers(res.sessionID);
            }).catch(error => onDeleteHandler(error.message));
    }

    const onFetchUsers = () => {
        Axios.get('http://localhost:1345/all',{ headers: { sessionID: sessionId } })
        .then(response => {
            if (response.data.users) {
                let fetchedUsers = response.data.users;
                setUsers(fetchedUsers);
            } else {
                setMessage(response.data.message)
            }
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className="Users">
            {message}
            <UserList users={users} sessionID={sessionId} onDeleteHandler={onDeleteHandler}  startSessionHandler={startSessionHandler} onFetchUsers={onFetchUsers} />
        </div>
    )
}

export default Users;