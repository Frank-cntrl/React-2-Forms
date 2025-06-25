import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const initialBookState = [
    { id: 1, title: "Babel" },
    { id: 2, title: "Hour of Spirits"},
    { id: 3, title: "Crime and Punishment"},
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
      <AddBook appendBook={appendBook}/>
      {/*<BookList />*/}
      {books.map(book => (
        <li key ={book.id}>{book.title}
        </li>
      ))}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
