import React from 'react'

const Posts = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h2>{props.created_at}</h2>
            <p>{props.contents}</p>
        </div>
    )
}
export default Posts