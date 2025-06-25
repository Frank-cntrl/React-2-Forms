import React, {useState} from "react";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({appendBook}) => {

  let [title, setTitle] = useState("");
  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = (event) =>{
    event.preventDefault();
    appendBook(title);
    clearForm();
  };

  const handleTitleChange = (event) => {
    setDirty(true);

    setTitle(event.target.value);

    if(title.length < 4){
      setTitleErrors(["Title Must Have Atleast 4 Characters"]);
    }
    else{
      setTitleErrors([]);
    }
  };

  const clearForm = () =>{
    setTitle = ("");
  };

  return (
    <form onSubmit={handleSubmit} className = "new-book-form">
      <input name = "title" 
      type = "text" 
      placeholder="Title"
      onChange = {handleTitleChange}
      value = {title}
      />
      {titleErrors.map((error) => (
        <p className = "error" key ={error}>
          {error}
        </p>
    ))}
      <button disabled = {titleErrors.length > 0 || !dirty}>Create Book</button>
    </form>
  );
};

export default AddBook;
