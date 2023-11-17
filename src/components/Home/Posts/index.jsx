/* eslint-disable react/prop-types */

import Feed from "../Feed"

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <Feed key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts
