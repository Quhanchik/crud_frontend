import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './UsersList.scss';
import UserService from '../../services/UsersService';

const UsersList = (props) => {
    const {request} = UserService();

    useEffect(() => {
        request("http://localhost:8080/users").then((data) => props.setUsers(data['body']));
    }, []);

    const initUser = (usersList) => {
        props.setUsers(usersList);
    }

    const deleteUser = (id) => {
        request(`http://localhost:8080/users/${id}`, "DELETE")
            .then((res) => {
                const newData = props.users.filter(item => item.id !== id);

                initUser(newData);
            });
    }

    const items = users => {
        return (
            users.map(item => {
                return (
                    <li className="listItem" key={item.id}>
                        <Link className='link' to={`/${item.id}`}>{`${item.id}. ${item.login}`}</Link>
                        <button onClick={() => deleteUser(item.id)}>delete</button>
                    </li>
                )
            })
        )
    }

    return (
        <ul>
            {items(props.users)}
        </ul>
    )
}

export default UsersList;