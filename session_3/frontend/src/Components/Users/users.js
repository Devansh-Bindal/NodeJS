import React, { useState, useEffect } from 'react';
import './user.css';
import Axios from 'axios';
import UserList from './userList/userList'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    

    const onDeleteHandler = (message) => {
        setMessage(message)
    }
    const onFetchUsers = () => {
        Axios.get('http://localhost:1250/user/get')
            .then(response => {
                let fetchedUsers = response.data.users;
                setUsers(fetchedUsers);
                // console.log(fetchedUsers)
            })
            .catch(error => console.log(error.message))
    }
    useEffect(() => {
        onFetchUsers()
    }, []);


    return (
        <div className="Users">
            {message}
            <UserList users={users} onDeleteHandler={onDeleteHandler} onFetchUsers={onFetchUsers} />
        </div>
    )
}

export default Users;