import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookCard from "./components/BookCard";
import SearchField from "./components/searchBar";
import BookList, { defaultBookList } from "./components/BookList";

const App = () => {

  const [books, setBooks] = useState(defaultBookList);

  const appendBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  const [query, setQuery] = useState("");
  const filteredBooks = books.filter(book =>
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
//yes
const root = createRoot(document.getElementById("root"));
root.render(<App />);
