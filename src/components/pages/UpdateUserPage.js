import { useState, useEffect } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";

import UserService from "../../services/UsersService";

const UpdateUserPage = (props) => {
    const {request} = UserService();
    const {id} = useParams();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        request("http://localhost:8080/" + id).then(res => {
            setLogin(res['body'].login);
            setPassword(res['body'].password);
        })
    }, []);

    const setLoginValue = (e) => {
        setLogin(e.target.value);
    }

    const setPasswordValue = (e) => {
        setPassword(e.target.value);
    }

    const updateUser = (e) => {
        e.preventDefault();

        request("http://localhost:8080/update", "POST", JSON.stringify({id: props.user.id, login, password}))
            .then(res => {
                console.log(res);
                if(res.status === 200) {
                    console.log(res);
                    props.setUsers([...props.users, res['body']]);
                    setLogin('');
                    setPassword('');
                    setFormError(false);
                    navigate(-1);
                } else {
                    console.log("ne pravilno");
                    setFormError(true);
                }
            })
    }

    const navigate = useNavigate();

    const clazzInput = formError ? 'userInput red' : 'userInput';

    return (
        <>
            <form action="#" className="userForm" onSubmit={updateUser}>
                {props.user.id}
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
                <button className="submit">Update</button>
            </form>
            <button onClick={() => navigate(-1)}><Link className="link">Назад</Link></button>
        </>
    )
}

export default UpdateUserPage;