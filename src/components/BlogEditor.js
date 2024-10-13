import React, { useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/BlogEditor.module.css';

const BlogEditor = () => {
  const editorInstance = useRef(null);
  const router = useRouter();

  const saveBlog = async () => {
    const blogData = await editorInstance.current.save();
    const token = localStorage.getItem('token'); // get JWT from localStorage

    try {
      await axios.post('/api/blogs', blogData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/');
    } catch (error) {
      console.error('Error saving blog', error);
    }
  };

  return (
    <div className={styles.blogEditor}>
      <div ref={editorInstance} />
      <button className={styles.saveButton} onClick={saveBlog}>
        Save Blog
      </button>
    </div>
  );
};

export default BlogEditor;
