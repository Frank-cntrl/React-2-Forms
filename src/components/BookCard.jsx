import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={book.imageURL}
        alt={book.title}
      />
      <div className = "book-card-text">
      <h4 className="book-title">{book.title || "Untitled Book"}</h4>
      <p className="book-rating">Rating: {book.rating}</p>
      <p className="favorite">Favorite: {book.isFavorite ? "Yes" : "No"}</p>
      <p>Finished Read: {book.isRead ? "Yes" : "No"}</p>
      <p>Date Publised: {book.datePublished}</p>
      <p>Description: {book.description}</p>

      </div>
    </div>
  );
};

export default BookCard;