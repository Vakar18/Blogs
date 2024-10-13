import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const GeoLocation = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogsByLocation = async () => {
      try {
        const res = await axios.get('/api/getGeoBlogs');
        setBlogs(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchBlogsByLocation();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default GeoLocation;
