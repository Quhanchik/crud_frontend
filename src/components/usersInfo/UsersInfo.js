import { useEffect, useState, useMemo } from 'react';

import './UsersInfo.scss';
import UserService from '../../services/UsersService';

const UsersInfo = (props) => {
    
    return (
        <div className="usersInfo">
            количество аккаунтов: {props.lenght}
        </div>
    );
}

export default UsersInfo;