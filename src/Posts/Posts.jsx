import React from 'react';
import Post from './Post/Post';
import './Posts.css';

const Posts = (props) => {

    let inpVal = React.createRef();

    let postsUpdate = () => {
        props.stateUpdate(inpVal.current.value)
        inpVal.current.value = ''
    }

    let allPosts = props.state.map( elem => <Post text={elem.text} />);

    return (
        <div>
            <input ref={inpVal} type='text' className='input' placeholder='What do you want to tell us?'/>
            <button onClick={postsUpdate} className='button'>Add Post</button>
            {allPosts}
        </div>
    )
}

export default Posts;