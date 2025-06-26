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
  imageURL: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  title: "The Midnight Library",
  rating: 4,
  Author: "Matt Haig",
  isRead: true,
  isFavorite: true,
},
{
  id: 3,
  imageURL: "https://m.media-amazon.com/images/I/81LscKUplaL._UF1000,1000_QL80_.jpg",
  title: "The Seven Husbands of Evelyn Hugo",
  rating: 5,
  Author: "Taylor Jenkins Reid",
  isRead: false,
  isFavorite: false,
},
{
  id: 4,
  imageURL: "https://m.media-amazon.com/images/I/91CqNElQaKL.jpg",
  title: "It Ends With Us",
  rating: 4,
  Author: "Colleen Hoover",
  isRead: true,
  isFavorite: true,
},
{
  id: 5,
  imageURL: "https://m.media-amazon.com/images/I/81RrEEMiOCL._UF1000,1000_QL80_.jpg",
  title: "A Court of Thorns and Roses",
  rating: 4,
  Author: "Sarah J. Maas",
  isRead: false,
  isFavorite: false,
},
{
  id: 6,
  imageURL: "https://upload.wikimedia.org/wikipedia/en/d/dd/Fourth_Wing_Cover_Art.jpeg",
  title: "Fourth Wing",
  rating: 5,
  Author: "Rebecca Yarros",
  isRead: false,
  isFavorite: true,
  category: "Fiction",
},
{
  id: 7,
  imageURL: "https://m.media-amazon.com/images/I/81msb6gUBTL._UF1000,1000_QL80_.jpg",
  title: "The Song of Achilles",
  rating: 5,
  Author: "Madeline Miller",
  isRead: true,
  isFavorite: true,
},
{
  id: 8,
  imageURL: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
  title: "Where the Crawdads Sing",
  rating: 4,
  Author: "Delia Owens",
  isRead: false,
  isFavorite: false,
},
{
  id: 9,
  imageURL: "https://m.media-amazon.com/images/I/81vpsIs58WL.jpg",
  title: "The Silent Patient",
  rating: 4,
  Author: "Alex Michaelides",
  isRead: true,
  isFavorite: false,
},
{
  id: 10,
  imageURL: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
  title: "Verity",
  rating: 4,
  Author: "Colleen Hoover",
  isRead: true,
  isFavorite: true,
},
{
  id: 11,
  imageURL: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
  title: "Harry Potter and the Sorcerer's Stone",
  rating: 5,
  Author: "J.K. Rowling",
  isRead: true,
  isFavorite: true,
}
];

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);

export default BookList;