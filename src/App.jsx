import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const initialBookState = [
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/91OmD3UsE0L._UF1000,1000_QL80_.jpg",
        title: "Babel",
        rating: 4,
        Author: "R.F. Kuang",
        isRead: true,
        isFavorite: false,
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/71FUeDvYvSL.jpg",
        title: "The Book of Random",
        rating: 8,
        Author: "Y Perwelow",
        isRead: true,
        isFavorite: false,
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/81vo4l29fhL._UF1000,1000_QL80_.jpg",
        title: "You",
        rating: 9,
        Author: "Caroline Kepnes",
        isRead: true,
        isFavorite: false,
    },
    {
        id: 4,
        image: "https://images.booksense.com/images/866/064/9780439064866.jpg",
        title: "Harry Potter and the Chamber of Secrets",
        rating: 10,
        Author: "J.K. Rowling",
        isRead: true,
        isFavorite: false,
    },
  ];

  const [books, setBooks] = useState(initialBookState);

  const appendBook = (newBookTitle) => {
    const newBook = {
      id: books.length +1,
      title: newBookTitle,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook appendBook={appendBook} />
      <BookList books={books} />

    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
