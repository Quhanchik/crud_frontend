import UsersInfo from '../usersInfo/UsersInfo';
import UsersList from '../usersList/UsersList';
import AddUserForm from '../addUserForm/AddUserForm';

import { useState } from 'react';

const MainPage = (props) => {

    return (
        <>
            <UsersInfo lenght={props.users.length}/>
            <UsersList users={props.users} setUsers={props.setUsers}/>
            <AddUserForm setUsers={props.setUsers} users={props.users}/>
        </>
    )
}

export default MainPage;