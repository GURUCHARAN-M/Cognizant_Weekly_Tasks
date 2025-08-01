import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState('book');

  const books = [
    { id: 1, title: 'React Basics', author: 'John Doe' },
    { id: 2, title: 'Advanced React', author: 'Jane Smith' }
  ];

  const blogs = [
    { id: 101, title: 'React 18 Features', content: 'Concurrent Rendering...' },
    { id: 102, title: 'Using Hooks Effectively', content: 'Let’s dive into useEffect...' }
  ];

  const courses = [
    { id: 'C1', name: 'React for Beginners', duration: '4 weeks' },
    { id: 'C2', name: 'Fullstack with React & Node', duration: '8 weeks' }
  ];

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📰 Blogger App</h1>

      {/* Menu to Switch Content */}
      <div>
        <button onClick={() => setSelected('book')}>Show Books</button>{' '}
        <button onClick={() => setSelected('blog')}>Show Blogs</button>{' '}
        <button onClick={() => setSelected('course')}>Show Courses</button>
      </div>

      <hr />

      {/* Conditional Rendering Examples */}

      {/* Method 1: if-else (using variable) */}
      {(() => {
        if (selected === 'book') return <BookDetails books={books} />;
        else if (selected === 'blog') return <BlogDetails blogs={blogs} />;
        else if (selected === 'course') return <CourseDetails courses={courses} />;
        else return <p>Choose a category to display.</p>;
      })()}

      {/* Method 2: Ternary */}
      {/* 
      selected === 'book' ? (
        <BookDetails books={books} />
      ) : selected === 'blog' ? (
        <BlogDetails blogs={blogs} />
      ) : selected === 'course' ? (
        <CourseDetails courses={courses} />
      ) : (
        <p>Select a category</p>
      )
      */}

      {/* Method 3: Logical AND */}
      {/* {selected === 'blog' && <BlogDetails blogs={blogs} />} */}
    </div>
  );
}

export default App;
