import { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import styles from './Comments.module.css'

function Comments({id}) {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/comments")

        data = data.json();

        setComments(await data);
    }

    const x = comments.filter((c)=>{
        return Number(id) === c.postId;
    })    


    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <div className={styles.commentsContainer}>
            {
                comments.map((comment) => {
                    return Number(id) === comment.postId && <Comment comment={comment} x={x} setComments={setComments}/>
                })
            }
        </div>
    )
}

export default Comments
