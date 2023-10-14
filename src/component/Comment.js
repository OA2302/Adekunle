import React, {useState} from 'react';
import './cs.css'

const Cs = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <textarea
          id="new-comment"
          value={newComment}
          placeholder='Comment?'
          onChange={handleInputChange}
        />
        <button type="disabled" className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Cs;