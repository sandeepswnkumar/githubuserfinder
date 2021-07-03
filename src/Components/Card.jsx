import React, {useEffect, useState} from 'react'
import Loader from './Loader'

const Card = ({login}) => {
    
    const [fullData ,setFullData] = useState([])
    const [loder, setloder] = useState(true)

    const getUser = async () =>{
        const fullData = await fetch(`https://api.github.com/users/${login}`);
        const data1 = await fullData.json();
        setloder(false)
        setFullData(data1)
    }


    useEffect(() => {
        getUser();
    })


    if(loder){
        return <Loader />;
    }
    
    return (
        <div className='card'>
            <div className='cardImg' style={{ backgroundImage: `url(${fullData.avatar_url})` }}></div>
            <div className='cardData'>
                <div className="cardDataText">
                    <h2 title='Name'>{fullData.name || "null"}</h2>
                    <p title="UserName">@{fullData.login || "null"}</p>
                    <p><i className="fas fa-address-card" title="Bio"></i>{fullData.bio || "null" } </p>
                    <p><i className="fas fa-building" title="Company"></i>&nbsp;{fullData.company || "null"}</p>
                    <p><i className="fas fa-map-marker-alt" title="Location"></i>&nbsp;{fullData.location || "null"}</p>
                </div>
                <div className='iconData'>
                    <i className="fas fa-users" title="followers"> </i><span className='iconData'>{fullData.followers || 0}</span>
                    <i className="fas fa-user-check" title="following"> </i><span className='iconData'>{fullData.following || 0}</span>
                    <i className="fas fa-folder-plus" title="Repo"> </i><span className='iconData'>{fullData.public_repos || 0}</span>
                    <i className="fas fa-code-branch" title="Gits"> </i><span className='iconData'>{fullData.public_gists || 0}</span>
                </div>
            </div>
        </div>

    )
}

export default Card
