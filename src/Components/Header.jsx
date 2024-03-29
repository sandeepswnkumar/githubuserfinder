import React, { useState} from 'react'
import Card from './Card'


const Header = () => {
    const [inputD, setInputD] = useState("")
    const [userName, setUserName] = useState("")

    const onchange = (e) => {
        setInputD(e.target.value)
    }


    const keyData = (e) => {
        if (e.key === "Enter") {
            setUserName(inputD)
        }
    }

    return (
        <div>
            <h1 className='headText'>GitHub User Finder</h1>
            <div className='searchInput'>
                <input autoComplete='off' className='inpurBox' type="text" name="search" onKeyUp={keyData} onChange={onchange} value={inputD} id="searchBox" placeholder="Search User Name..." />
            </div>


            <div className='mainGit'>
                {!userName? null : <Card login={userName} />}
            </div>


        </div>
    )
}

export default Header
