import React, { useEffect, useState } from 'react'
import Card from './Card'
const GitCards = ({userName}) => {

    const [user, setUser] = useState([])
    const getData = async () => {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        setUser(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <div className='mainGit'>
            <div className='gitCards'>
                {user.map((userData)=><Card key= {userData.id} login = {userData.login} />)}
            </div>
        </div>
    )
}

export default GitCards
