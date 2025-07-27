// Example React Component using Strapi API
// Copy this to your React project as a reference

import React, { useState, useEffect } from 'react';
import strapiService from './services/strapi-api-service';

const StrapiExample = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  // Fetch posts from Strapi
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await strapiService.getAll('posts');
      setPosts(response.data || []);
    } catch (err) {
      setError('Failed to fetch posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Create a new post
  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await strapiService.create('posts', {
        ...newPost,
        publishedAt: new Date().toISOString()
      });
      setNewPost({ title: '', content: '' });
      fetchPosts(); // Refresh the list
    } catch (err) {
      setError('Failed to create post');
      console.error(err);
    }
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    try {
      await strapiService.delete('posts', id);
      fetchPosts(); // Refresh the list
    } catch (err) {
      setError('Failed to delete post');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="strapi-example">
      <h1>Strapi + React Integration</h1>
      
      {/* Create new post form */}
      <div className="create-post">
        <h2>Create New Post</h2>
        <form onSubmit={handleCreatePost}>
          <input
            type="text"
            placeholder="Post title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Post content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>

      {/* Display posts */}
      <div className="posts-list">
        <h2>Posts from Strapi</h2>
        {posts.length === 0 ? (
          <p>No posts found. Create your first post above!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.attributes.title}</h3>
              <p>{post.attributes.content}</p>
              <button 
                onClick={() => handleDeletePost(post.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StrapiExample;

// CSS for styling (add to your CSS file)
/*
.strapi-example {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.create-post {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.create-post form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.create-post input,
.create-post textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.create-post button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.post-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
*/ 