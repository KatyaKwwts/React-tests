import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SinglePost() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = () => {
    setLoading(true);
    setError(null);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error fetching the post');
        setLoading(false);
      });
  };

  return (
    <div>
      <div>
        <label htmlFor="postId">Post ID:</label>
        <input 
          type="number" 
          id="postId"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button onClick={fetchPost}>Fetch Post</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
