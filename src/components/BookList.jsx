import React, { useState } from "react";
import BookCard from "./BookCard";

export const defaultBookList = [
  {
    id: 1,
    imageURL:
      "https://m.media-amazon.com/images/I/91OmD3UsE0L._UF1000,1000_QL80_.jpg",
    title: "Babel",
    rating: 4,
    Author: "R.F. Kuang",
    isRead: true,
    isFavorite: false,
  },
  {
    id: 2,
    imageURL:
      "https://m.media-amazon.com/images/I/81vo4l29fhL._UF1000,1000_QL80_.jpg",
    title: "The Book of Radom",
    rating: 8,
    Author: "Y Perwelow",
    isRead: true,
    isFavorite: false,
  },
  {
    id: 3,
    imageURL:
      "https://m.media-amazon.com/images/I/81vo4l29fhL._UF1000,1000_QL80_.jpg",
    titleURL: "You",
    rating: 9,
    Author: "Caroline Kepnes",
    isRead: true,
    isFavorite: false,
  },
  {
    id: 4,
    imageURL: "https://images.booksense.com/images/866/064/9780439064866.jpg",
    title: "Harry Potter",
    rating: 10,
    Author: "J.K. Rowling",
    isRead: true,
    isFavorite: false,
  },
];

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);

export default BookList;