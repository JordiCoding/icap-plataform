// Strapi API Service for React Frontend
// Copy this file to your React project's src/services/ directory

const STRAPI_URL = 'http://localhost:1337';
const API_URL = `${STRAPI_URL}/api`;

class StrapiService {
  constructor() {
    this.baseURL = API_URL;
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }

  // Get all items of a content type
  async getAll(contentType, params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    const endpoint = `/${contentType}?${queryParams}`;
    return this.apiCall(endpoint);
  }

  // Get a single item by ID
  async getById(contentType, id, params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    const endpoint = `/${contentType}/${id}?${queryParams}`;
    return this.apiCall(endpoint);
  }

  // Create a new item
  async create(contentType, data) {
    return this.apiCall(`/${contentType}`, {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  }

  // Update an item
  async update(contentType, id, data) {
    return this.apiCall(`/${contentType}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    });
  }

  // Delete an item
  async delete(contentType, id) {
    return this.apiCall(`/${contentType}/${id}`, {
      method: 'DELETE',
    });
  }

  // Upload file
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('files', file);

    return this.apiCall('/upload', {
      method: 'POST',
      headers: {}, // Let browser set Content-Type for FormData
      body: formData,
    });
  }
}

// Create and export a singleton instance
const strapiService = new StrapiService();
export default strapiService;

// Example usage:
/*
import strapiService from './services/strapi-api-service';

// Get all posts
const posts = await strapiService.getAll('posts');

// Get a single post
const post = await strapiService.getById('posts', 1);

// Create a new post
const newPost = await strapiService.create('posts', {
  title: 'My New Post',
  content: 'This is the content...',
  publishedAt: new Date().toISOString()
});

// Update a post
const updatedPost = await strapiService.update('posts', 1, {
  title: 'Updated Title'
});

// Delete a post
await strapiService.delete('posts', 1);
*/ 