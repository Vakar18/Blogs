import axios from 'axios';

export const fetchBlogs = async () => {
  const res = await axios.get('/api/blogs');
  return res.data;
};

export const createBlog = async (blogData, token) => {
  const res = await axios.post('/api/blogs', blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
