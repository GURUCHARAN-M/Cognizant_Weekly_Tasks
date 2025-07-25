import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Step 6: Load posts from API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => {
        console.error('Error loading posts:', error);
        this.setState({ hasError: true });
      });
  };

  // Step 7: Call API when component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Catch errors and display alert
  componentDidCatch(error, info) {
    console.error("Error caught in component:", error);
    alert("An error occurred while rendering the Posts component.");
  }

  // Step 8: Render posts
  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
