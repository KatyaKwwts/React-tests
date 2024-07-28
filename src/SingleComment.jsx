import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SingleComment() {
  const [commentId, setCommentId] = useState('');
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComment = () => {
    setLoading(true);
    setError(null);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${commentId}`)
      .then(response => {
        setComment(response.data);
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
        <label htmlFor="CommentId">Comment ID:</label>
        <input 
          type="number" 
          id="commentId"
          value={commentId}
          onChange={(e) => setCommentId(e.target.value)}
        />
        <button onClick={fetchComment}>Fetch Comment</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {comment && (
        <div>
          <h2>{comment.title}</h2>
          <p>{comment.body}</p>
        </div>
      )}
    </div>
  );
}

export default SingleComment;
