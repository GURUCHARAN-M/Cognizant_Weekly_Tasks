import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <h2>📝 Blog Details</h2>
      {blogs.length > 0 ? (
        blogs.map((blog, i) => (
          <div key={blog.id || i}>
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No Blogs Found</p>
      )}
    </div>
  );
};

export default BlogDetails;
