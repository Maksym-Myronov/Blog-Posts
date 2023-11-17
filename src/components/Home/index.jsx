/* eslint-disable react/prop-types */
import Posts from './Posts'
import styles from './index.module.scss'

const Home = ({ posts }) => {
    return (
        <div className={styles.homePage}>
            {posts.length ? (
                <Posts posts={posts} />
            ) : (
                <p>Soory we dont have posts</p>
            )}
        </div>
    )
}

export default Home
