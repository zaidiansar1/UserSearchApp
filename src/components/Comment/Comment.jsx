import React from 'react'
import styles from './Comment.module.css'
import deleteIcon from './delete.png'


function Comment({comment, x, setComments}) {
    function handleDelete() {
        x = x.filter((c)=>{
            return c.id !== comment.id;
        })
        setComments(x);
    }
    return (
        <div className={styles.commentContainer}>
            <div className={styles.head}>
                <strong className={styles.title}>{comment.name}</strong>
                <img src={deleteIcon} alt="" width="17px" height="17px" onClick={handleDelete}/>
            </div>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment
