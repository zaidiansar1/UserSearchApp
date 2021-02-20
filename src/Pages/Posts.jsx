import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostDetails from '../components/PostDetails'
import PostHeader from '../components/PostHeader'



function Contact() {
    const [postData, setPostData] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const {userid} = useParams();


    const handleRefresh = () => {
        setData(postData);
    }


    const handleKeySearch = (e) => {
        if (e.key === 'Enter') {
            const filterData = data.filter( (post) => {
                return post.title.toLowerCase().includes(value.toLowerCase());
            })
            setData(filterData);
            setValue('');
        }
    }

    const handleSearch = () => {
        const filterData = data.filter( (post) => {
            return post.title.toLowerCase().includes(value.toLowerCase());
        })
        setData(filterData);
        setValue('');
    }
    
    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const fetchPostData = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")

        data = data.json();

        setPostData(await data);
        setData(await data);
    }

    useEffect(() => {
        fetchPostData();
    }, [])

    return (
        <div>
            <PostHeader handleInput={handleInput} value={value} handleSearch={handleSearch} handleRefresh={handleRefresh} handleKeySearch={handleKeySearch}/>
            <PostDetails data={data} setData={setData} userid={userid}/>
        </div>
    )
}

export default Contact
