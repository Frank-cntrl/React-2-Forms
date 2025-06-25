import React, { useState } from "react";
// BookList.js
import React from "react";
import BookCard from "./BookCard";

const defaultBookList = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/91OmD3UsE0L._UF1000,1000_QL80_.jpg",
    title: "Babel",
    rating: 4,
    Author: "R.F. Kuang",
    isRead: true,
    isFavorite: false,
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/81vo4l29fhL._UF1000,1000_QL80_.jpg",
    title: "The Book of Radom",
    rating: 8,
    Author: "Y Perwelow",
    isRead: true,
    isFavorite: false,
  },
  {
    id: 3,
    image:
      "https://m.media-amazon.com/images/I/81vo4l29fhL._UF1000,1000_QL80_.jpg",
    title: "You",
    rating: 9,
    Author: "Caroline Kepnes",
    isRead: true,
    isFavorite: false,
  },
  {
    id: 4,
    image: "https://images.booksense.com/images/866/064/9780439064866.jpg",
    title: "Harry Potter",
    rating: 10,
    Author: "J.K. Rowling",
    isRead: true,
    isFavorite: false,
  },
];

const BookList = (newBook) => {
  setBooks([...books, newBook]);
};

const appendBook = (newBook) => {
  setBooks([...books, newBook]);
};

return (
  <div>
    {books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);
