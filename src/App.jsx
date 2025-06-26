import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import SearchField from "./components/searchBar";
import BookList from "./components/BookList";

const App = () => {
  const initialBookState = [
    {
        id: 1,
        imageURL: "https://m.media-amazon.com/images/I/91OmD3UsE0L._UF1000,1000_QL80_.jpg",
        title: "Babel",
        rating: 3,
        author: "R.F. Kuang",
        isRead: true,
        isFavorite: false,
    },
    {
        id: 2,
        imageURL: "https://m.media-amazon.com/images/I/71FUeDvYvSL.jpg",
        title: "The Book of Random",
        rating: 4,
        author: "Y Perwelow",
        isRead: true,
        isFavorite: false,
    },
    {
        id: 3,
        imageURL: "https://m.media-amazon.com/images/I/81vo4l29fhL._UF1000,1000_QL80_.jpg",
        title: "You",
        rating: 4,
        author: "Caroline Kepnes",
        isRead: true,
        isFavorite: false,
    },
    {
        id: 4,
        imageURL: "https://images.booksense.com/images/866/064/9780439064866.jpg",
        title: "Harry Potter and the Chamber of Secrets",
        rating: 5,
        author: "J.K. Rowling",
        isRead: true,
        isFavorite: false,
    },
  ];

  const [books, setBooks] = useState(initialBookState);
  const appendBook = (newBook) => setBooks([...books, newBook]);

  const [query, setQuery] = useState("");
  const filteredBooks = books.filter((book) =>
  (book.title || "").toLowerCase().includes(query.toLowerCase())
);

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook appendBook={appendBook}/>
      <SearchField query={query} setQuery={setQuery}/>
      <BookList books={filteredBooks}/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
