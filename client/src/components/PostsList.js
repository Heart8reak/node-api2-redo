import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Posts'

const PostsList = props => {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:5050/api/posts`)
            .then(res => {
                console.log(res)
                setPostList(res.data)
            })
            .catch(err => console.log('ERROR', err))
    }, [])

    return (
        <div>
            {postList.map(postData => {
                return (
                    <Post
                        key={postData.id}
                        title={postData.title}
                        created_at={postData.created_at}
                        contents={postData.contents}
                    />
                )
            })}
        </div>
    )
}

export default PostsList