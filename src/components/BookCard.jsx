import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={book.imageURL}
        alt={book.title}
      />
      <h4 className="book-title">{book.title || "Untitled Book"}</h4>
      <p className="book-author">{book.author}</p>
      <p className="book-rating">Rating: {book.rating}</p>
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        className="book-link"
      >
        View on GoodReads
      </a>
    </div>
  );
};

export default BookCard;