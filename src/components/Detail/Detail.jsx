import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Comments from '../Comments'
import styles from './Detail.module.css'
import down from './down-chevron.png'
import tick from './upload.png'

function Detail({post, id, data, setData}) {
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(true);
    }

    function handleUp() {
        setVisible(false);
    }


    return (
        <div className={styles.detailContainer}>
            <strong className={styles.title}>{post.title}</strong>
            
            <div className={styles.body}>{post.body}</div>

            {
                (visible)?<Link onClick={handleUp}>Comments<img src={tick} alt="" width="10px"/></Link>:<Link onClick={handleClick}>Comments</Link>
            }

            {
                (visible)?<Comments id={id} data={data} setData={setData}/>:<img src={down} alt="" width="10px" height="12px"/>
            }


        </div>
    )
}

export default Detail
