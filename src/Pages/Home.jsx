import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Profiles from '../components/Profiles/Profiles'

function Home() {
    const [userData, setUserData] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const handleRefresh = () => {
        setData(userData);
    }

    const handleKeySearch = (e) => {
        if (e.key === 'Enter') {
            const filterData = data.filter( (user) => {
                return user.name.toLowerCase().includes(value.toLowerCase())
                || user.company.name.toLowerCase().includes(value.toLowerCase())
            })
            setData(filterData);
            setValue('');
        }
    }

    const handleSearch = () => {
        const filterData = data.filter( (user) => {
            return user.name.toLowerCase().includes(value.toLowerCase())
            || user.company.name.toLowerCase().includes(value.toLowerCase())
        })
        setData(filterData);
        setValue('');
    }
    
    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const fetchUserData = async ()=> {
        let data = await fetch("https://jsonplaceholder.typicode.com/users")

        data = data.json();

        setUserData(await data);
        setData(await data)
    }
    
    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <div>
            <Header handleInput={handleInput} value={value} handleSearch={handleSearch} handleRefresh={handleRefresh} handleKeySearch={handleKeySearch}/>
            <Profiles data={data} setData={setData}/>
        </div>
    )
}

export default Home
