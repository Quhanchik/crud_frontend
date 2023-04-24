import { useCallback } from "react";

const UserService = () => {
    const request = useCallback(async (url, method="GET", body = null, headers = {'Content-Type' : 'application/json'}) => {
        const responce = await fetch(url, {method, body, headers});

        let data = [];
        data['body'] = await responce.json();
        data['status'] = responce.status;

        return data;
    })
    
    return {request}
}

export default UserService;