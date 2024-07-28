import React, { useState } from 'react';

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea 
          id="body"
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;
