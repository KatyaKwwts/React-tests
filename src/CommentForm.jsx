import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, body });
    setName('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
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
      <button type="submit">Create Comment</button>
    </form>
  );
}

export default CommentForm;
