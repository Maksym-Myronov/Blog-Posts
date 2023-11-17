/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from './index.module.scss'

const Feed = ({ post }) => {
    return (
        <article className={styles.feed__component}>
            <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p className={styles.postDate}>{post.datetime}</p>
                <p className={styles.postBody}>{(post.body).length <= 25 ? post.body : `${post.body.slice(0, 35)}...`}</p>
            </Link>
        </article>
    )
}

export default Feed
