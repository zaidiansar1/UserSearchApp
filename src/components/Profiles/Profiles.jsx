import { useEffect, useState } from 'react'
import User from '../User/User'
import styles from './Profiles.module.css'

function Profiles({data, setData}) {
    let index = 0;

    const [pic, setPic] = useState([]);

    const fetchUserProfile = async ()=> {
        let data = await fetch("https://randomuser.me/api/?results=10")

        data = data.json();

        setPic(await data);
    }
    
    useEffect(() => {
        fetchUserProfile();
    }, [])

    return (
        <div className={styles.profilesContainer}>
            {
                data.map((user)=>{
                    return <User user={user}/>
                })
            }
        </div>
    )
}

export default Profiles
