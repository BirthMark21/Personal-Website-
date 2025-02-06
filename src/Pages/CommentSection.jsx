import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaShareAlt } from 'react-icons/fa';
import './CommentSection.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  const handleShare = () => {
    const shareText = `Check out this amazing portfolio!`;
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="comment-section">
      <div className="interaction-buttons">
        <button onClick={handleLike}><FaThumbsUp /> {likes}</button>
        <button onClick={handleDislike}><FaThumbsDown /> {dislikes}</button>
        <button onClick={handleShare}><FaShareAlt /> Share</button>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <input 
          type="text" 
          placeholder="Write a comment..." 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Post</button>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
