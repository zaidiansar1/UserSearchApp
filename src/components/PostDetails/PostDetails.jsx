import React from 'react'
import Detail from '../Detail/Detail'
import styles from './PostDetails.module.css'

function PostDetails({data, setData, userid}) {
    return (
        <div className={styles.postDetailsContainer}>
            {
                data.map((post) => {
                    return Number(userid) === post.userId &&<Detail post={post} id={post.id} data = {data} setData={setData} />
                })
            }
        </div>
    )
}

export default PostDetails
