import React, { useEffect, useState } from 'react'
import Card from './Card'
const GitCards = ({ userName }) => {

    const [user, setUser] = useState([])
    const getData = async () => {
        try {
            const res = await fetch("https://api.github.com/users");
            const data = await res.json();
            if(data.status===403){
                window.alert("You have too many times called api");
                return;
            }
            setUser(data);
        } catch (error) {
            window.alert("You have too many times called api");
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <div className='mainGit'>
            <div className='gitCards'>
                {user.map((userData) => <Card key={userData.id} login={userData.login} />)}
            </div>
        </div>
    )
}

export default GitCards
