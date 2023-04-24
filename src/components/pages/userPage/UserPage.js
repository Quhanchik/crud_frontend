import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './UserPage.scss';
import UserService from '../../../services/UsersService';

const UserPage = (props) => {
    const {id} = useParams();
    const {request} = UserService();
    const [user, setUser] = useState({});

    useEffect(() => {
        request("http://localhost:8080/" + id).
            then(res => setUser(res['body'])); 
    }, []);

    return (
        <div>
            <div className="listItem" style={{'padding': '0 80px'}}>
                <div>Id: {user.id}</div>
                <div>Login: {user.login}</div>
                <div>Password: {user.password}</div>
            </div>
            <br />
            <div className="buttons">
                <button><Link to="/" className='link'>Назад</Link></button>     
                <button><Link 
                        to={`/${user.id}/update`} 
                        className='link'
                        onClick={() => props.setUser(user)}>обновить</Link></button>
            </div>
        </div>
    )
}

export default UserPage;