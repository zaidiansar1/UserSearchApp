import React from 'react'
import styles from './PostHeader.module.css'
import search from './loupe.png'

function PostHeader({handleRefresh, value, handleInput, handleKeySearch, handleSearch}) {
    return (
        <div className={styles.postHeaderContainer}>
            <h1 onClick={handleRefresh}>Posts</h1>
            <input type="text" placeholder="Search posts by Title" value={value} onChange={handleInput} onKeyDown={handleKeySearch}/>
            <img src={search} alt="" width="30px" height="30px" onClick={handleSearch} />
        </div>
    )
}

export default PostHeader
