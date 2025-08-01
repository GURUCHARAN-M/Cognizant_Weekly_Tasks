import React from 'react';

const BookDetails = ({ books }) => {
  if (!books || books.length === 0) return <p>No Books Available</p>;

  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map((book, index) => (
          <li key={book.id || index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
