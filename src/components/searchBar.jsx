import React, {useState} from "react";
import Books from "./BookList";
import BookList, { defaultBookList } from "./BookList";
import BookCard from "./BookCard";

const searchField = ({query, setQuery}) =>{

const handleInput = (event) =>{
    setQuery(event.target.value);
};

return (
    <div className = "search-bar">
        <label>
            Search Books:
            <input
                className = "search-bar-text"
                placeholder="Search..."
                value={query}
                onChange={handleInput}
            />
        </label>
    </div>
)
};
//yes or no or yes
export default searchField;