import React from 'react'
import { Link } from 'react-router-dom'
import styles from './User.module.css'

function User({user}) {
    return (
        <div className={styles.userContainer}>
            <div className={styles.userDetails}>
                <div className={styles.userName}>
                    <strong>Name:</strong> {user.name}
                </div>

                <div className={styles.userCompany}>
                    <strong>Company:</strong> {user.company.name}
                </div>

                <Link to={`/posts/${user.id}`}>Posts</Link>
            </div>
        </div>
    )
}

export default User
