import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"; 
import { BASE_URL } from "../helper";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/posts/get`);
      console.log("Fetched Posts:", response.data);
      const sortedPosts = response.data.reverse();
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${id}/delete`);
      fetchPosts(); 
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  
  const saveEditPost = async (id) => {
    try {
      await axios.patch(`${BASE_URL}/api/posts/${id}/edit`, editingPost);
      setEditingPost(null);
      fetchPosts(); 
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="post-list">
      <h2 className="list-heading">Posts</h2>
      {posts.map((post) => (
        <div className="post-item" key={post._id}>
          {editingPost && editingPost._id === post._id ? (
            <>
              <input
                className="form-input"
                type="text"
                value={editingPost.Title}
                onChange={(e) => setEditingPost({ ...editingPost, Title: e.target.value })}
              />
              <textarea
                className="form-textarea"
                value={editingPost.text}
                onChange={(e) => setEditingPost({ ...editingPost, text: e.target.value })}
              ></textarea>
              <button
                className="edit-button"
                onClick={() => saveEditPost(post._id)}
              >
                Save
              </button>
              <button
                className="delete-button"
                onClick={() => setEditingPost(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h3 className="post-title">{post.Title}</h3>
              <p className="post-content">{post.text}</p>
              <small className="post-author">
                By {post.firstName} {post.lastName}
              </small>
              <button
                className="edit-button"
                onClick={() => setEditingPost(post)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deletePost(post._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
