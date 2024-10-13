// app/page.js
"use client"
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If the user is not authenticated, redirect them to the login page
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  return (
    <div className="home-page">
      <h1>Welcome to the Blog Platform</h1>
      <p>You're logged in as {session.user.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>

      {/* Display some content here, such as a blog feed */}
      <div className="blog-feed">
        <h2>Your Blog Feed</h2>
        {/* Add blog feed content here */}
      </div>

      <style jsx>{`
        .home-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        button {
          padding: 10px 20px;
          background-color: red;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .blog-feed {
          margin-top: 20px;
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
