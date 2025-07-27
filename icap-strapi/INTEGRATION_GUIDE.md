# 🚀 Strapi + React Integration Guide

## Overview
This guide shows how to integrate your existing React.js project with this Strapi backend.

## 📁 Project Structure
```
your-project/
├── frontend/          # Your existing React.js project
│   ├── src/
│   ├── package.json
│   └── ...
└── backend/           # This Strapi project (icap-strapi)
    ├── src/
    ├── config/
    └── ...
```

## 🔧 Setup Steps

### 1. Strapi Backend (Already Done ✅)
- ✅ Strapi is running on `http://localhost:1337`
- ✅ CORS is configured to allow React frontend
- ✅ Admin panel accessible at `http://localhost:1337/admin`

### 2. React Frontend Setup

#### Step 1: Copy API Service
Copy `strapi-api-service.js` to your React project:
```bash
# From your React project directory
mkdir -p src/services
cp /path/to/icap-strapi/strapi-api-service.js src/services/
```

#### Step 2: Create Content Types in Strapi
1. Go to `http://localhost:1337/admin`
2. Navigate to **Content-Type Builder**
3. Create your content types (e.g., Posts, Users, Products, etc.)

#### Step 3: Use the API Service in React
```javascript
import strapiService from './services/strapi-api-service';

// Example: Fetch all posts
const fetchPosts = async () => {
  try {
    const response = await strapiService.getAll('posts');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};
```

## 📋 Available API Methods

### Basic CRUD Operations
```javascript
// Get all items
const posts = await strapiService.getAll('posts');

// Get single item
const post = await strapiService.getById('posts', 1);

// Create new item
const newPost = await strapiService.create('posts', {
  title: 'My Post',
  content: 'Post content...',
  publishedAt: new Date().toISOString()
});

// Update item
const updatedPost = await strapiService.update('posts', 1, {
  title: 'Updated Title'
});

// Delete item
await strapiService.delete('posts', 1);

// Upload file
const uploadedFile = await strapiService.uploadFile(fileInput.files[0]);
```

### Advanced Queries
```javascript
// Filter posts
const filteredPosts = await strapiService.getAll('posts', {
  'filters[title][$contains]': 'React',
  'sort': 'createdAt:desc',
  'pagination[page]': 1,
  'pagination[pageSize]': 10
});

// Include relations
const postsWithAuthor = await strapiService.getAll('posts', {
  'populate': 'author,comments'
});
```

## 🔐 Authentication (Optional)

For protected routes, add authentication:

```javascript
// Login
const loginResponse = await fetch('http://localhost:1337/api/auth/local', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    identifier: 'user@example.com',
    password: 'password'
  })
});

const { jwt } = await loginResponse.json();

// Use JWT for authenticated requests
const authenticatedPosts = await strapiService.getAll('posts', {}, {
  headers: { Authorization: `Bearer ${jwt}` }
});
```

## 🚀 Development Workflow

### Running Both Projects
```bash
# Terminal 1: Start Strapi backend
cd /path/to/icap-strapi
npm run develop

# Terminal 2: Start React frontend
cd /path/to/your-react-project
npm start
```

### Environment Variables
Create `.env` in your React project:
```env
REACT_APP_STRAPI_URL=http://localhost:1337
REACT_APP_API_URL=http://localhost:1337/api
```

Update the API service to use environment variables:
```javascript
const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';
```

## 📝 Example Components

See `react-example-component.jsx` for a complete example of:
- Fetching data from Strapi
- Creating new items
- Deleting items
- Error handling
- Loading states

## 🔧 Troubleshooting

### CORS Issues
- Ensure Strapi is running on port 1337
- Check that CORS is configured in `config/middlewares.ts`
- Verify your React app is running on allowed ports (3000, 5173, 4173)

### API Connection Issues
- Check browser console for errors
- Verify Strapi is running: `http://localhost:1337/admin`
- Test API directly: `http://localhost:1337/api/posts`

### Content Type Issues
- Create content types in Strapi admin panel first
- Ensure content types are published
- Check field names match your API calls

## 🎯 Next Steps

1. **Create your content types** in Strapi admin panel
2. **Copy the API service** to your React project
3. **Start building your components** using the provided examples
4. **Add authentication** if needed
5. **Deploy both projects** separately

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi REST API Guide](https://docs.strapi.io/dev-docs/api/rest)
- [React Documentation](https://react.dev/)

---

**Happy coding! 🚀** 