import React, { useState } from 'react';
import './userList.css';
import axios from 'axios';
import UserForm from '../userForm/userForm';

const UserList = (props) => {
    const { users,sessionID, onDeleteHandler, onFetchUsers } = props;
    const [btnClicked, SetBtnClicked] = useState(false);

    const deleteUserHandler = (email) => {
    axios.delete(`http://localhost:1345/delete?email=${email}`, { headers: { sessionID: sessionID } })
            .then(response => {
                onFetchUsers(sessionID)
                onDeleteHandler(response.data.message);
            })
            .catch(error => onDeleteHandler(error.message))
    }
    let userform = btnClicked ? <UserForm sessionID={sessionID} onFetchUsers={onFetchUsers} /> : null;

    let fetchedUsers = users.map(user => {
        return (
            <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className="Btn" onClick={() => deleteUserHandler(user.email)}>Delete</button></td>
            </tr>
        );
    })
    return (
        <div className="UserList">
            <div className="Top">
                <h2 className="UserHeading">Users List</h2>
                <button className="AddBtn" onClick={() => SetBtnClicked(prevState => !prevState)}>Add User</button>
            </div>
            {userform}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchedUsers}
                </tbody>

            </table>
        </div>
    )
}

export default UserList;