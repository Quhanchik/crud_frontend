import { useState } from 'react';

import './AddUserForm.scss';
import UserService from '../../services/UsersService';

const AddUserForm = (props) => {
    const {request} = UserService();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false);

    const setLoginValue = (e) => {
        setLogin(e.target.value);
    }

    const setPasswordValue = (e) => {
        setPassword(e.target.value);
    }

    const createUser = (e) => {
        e.preventDefault();

        request("http://localhost:8080/create", "POST", JSON.stringify({login, password}))
            .then(res => {
                if(res.status === 200) {
                    console.log(res);
                    props.setUsers([...props.users, res['body']]);
                    setLogin('');
                    setPassword('');
                    setFormError(false);
                } else {
                    console.log("ne pravilno");
                    setFormError(true);
                }
            })
    }

    const clazzInput = formError ? 'userInput red' : 'userInput';

    return (
        <form action="#" className="userForm" onSubmit={createUser}>
            <label className="userLabel" 
                   htmlFor="login">Login:</label>
            <input className={clazzInput} 
                   type="text" 
                   id="login"
                   value={login}
                   onChange={setLoginValue}
                   onClick={() => setFormError(false)}/>
            <label className="userLabel" 
                   htmlFor="password">Password:</label>
            <input className={clazzInput}
                   type="text" 
                   id="password"
                   value={password}
                   onChange={setPasswordValue}
                   onClick={() => setFormError(false)}/>
            <button className="submit">Register</button>
        </form>
    )
}

export default AddUserForm;