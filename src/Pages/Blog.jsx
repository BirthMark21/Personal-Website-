import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare, FaEdit, FaTrash } from "react-icons/fa";
import "./BlogPost.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("blogPosts")) || [];
  });
  const [editingPost, setEditingPost] = useState(null);
  const [comment, setComment] = useState("");
  
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const handlePublish = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      const newPost = {
        id: Date.now(),
        title,
        content,
        likes: 0,
        dislikes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
  };

  const handleUpdate = () => {
    setPosts(posts.map(post => post.id === editingPost.id ? { ...post, title, content } : post));
    setEditingPost(null);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes === 0 ? 1 : 0 } : post));
  };

  const handleDislike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, dislikes: post.dislikes === 0 ? 1 : 0 } : post));
  };

  const handleComment = (id) => {
    if (comment.trim() !== "") {
      setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
      setComment("");
    }
  };

  return (
    <div className="blog-container">
      <h1>Welcome to the Blog</h1>
      <h2>Create and Share Your Thoughts</h2>
      <div className="create-post">
        <h2>{editingPost ? "Edit Blog Post" : "Create a Blog Post"}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title..."
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content..."
        ></textarea>
        {editingPost ? (
          <button className="small-button" onClick={handleUpdate}>Update</button>
        ) : (
          <button className="small-button" onClick={handlePublish}>Publish</button>
        )}
      </div>

      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <div className="post-actions">
            <button className="like-btn" onClick={() => handleLike(post.id)}>
              <FaThumbsUp /> {post.likes}
            </button>
            <button className="dislike-btn" onClick={() => handleDislike(post.id)}>
              <FaThumbsDown /> {post.dislikes}
            </button>
            <button className="edit-btn" onClick={() => handleEdit(post)}>
              <FaEdit /> Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(post.id)}>
              <FaTrash /> Delete
            </button>
          </div>

          <div className="comment-section">
            <h4>Comments</h4>
            <div className="comment-input">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button onClick={() => handleComment(post.id)}>Submit</button>
            </div>
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index} style={{ color: "green" }}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
