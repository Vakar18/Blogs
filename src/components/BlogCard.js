import styles from '../styles/Blog.module.css';

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <h2 className={styles.blogTitle}>{blog.title}</h2>
      <p className={styles.blogContent}>{blog.content}</p>
      <div className={styles.blogFooter}>
        <span>Posted by {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default BlogCard;
