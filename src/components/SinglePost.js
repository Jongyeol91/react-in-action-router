import React from "react";

function SinglePost(props) {
    return(
        <>
            <h1>singlePost</h1>
            <h1>{props.params.postId}</h1>
        </>
    )
}

export default SinglePost
