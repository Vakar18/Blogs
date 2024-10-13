import BlogEditor from '../components/BlogEditor';
import { useSession } from 'next-auth/react';

const BlogEditorPage = () => {
  const { data: session } = useSession();

  if (!session) return <p>Please log in to create a blog</p>;

  return <BlogEditor />;
};

export default BlogEditorPage;
