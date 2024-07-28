import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostLIst';
import CommentList from './ComentList';
import PostForm from './PostForm.jsx';
import CommentForm from './CommentForm.jsx';
import SinglePost from './SinglePost.jsx';
import SingleComment from './SingleComment.jsx';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchAllPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  
  
  const fetchAllComments = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const addPost = (newPost) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        setPosts([response.data, ...posts]);
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
  };

  const addComment = (newComment) => {
    axios.post('https://jsonplaceholder.typicode.com/comments', newComment)
      .then(response => {
        setComments([response.data, ...comments]);
      })
      .catch(error => {
        console.error('There was an error creating the comment!', error);
      });
  };


 
  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={fetchAllPosts}>Fetch All Posts</button>
      <button onClick={fetchAllComments}>Fetch All Comments</button>
      <PostList posts={posts} />
      <CommentList comments={comments} />
      
      <PostForm onSubmit={addPost} />
      <CommentForm onSubmit={addComment} />


    <SinglePost/>
    <SingleComment/>
    </div>

  );
}

export default App;
