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

const AddBook = ({ books, appendBook }) => {
    const [title, setTitle] = useState("");
    const handleTitleChange = (event) => setTitle(event.target.value);

    const [author, setAuthor] = useState("");
    const handleAuthorChange = (event) => setAuthor(event.target.value);

    const [imageURL, setImageURL] = useState("");
    const handleImageURLChange = (event) => setImageURL(event.target.value);

    const [publishedDate, setPublishedDate] = useState("");
    const handlePublishedDateChange = (event) => setPublishedDate(event.target.value);

    const [description, setDescription] = useState("");
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const [rating, setRating] = useState(0);
    const handleRatingChange = (event) => setRating(Number(event.target.value));

    const [category, setCategory] = useState("");
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const [isRead, setIsRead] = useState(false);
    const handleReadChange = (event) => setIsRead(event.target.checked);

    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteChange = (event) => setIsFavorite(event.target.checked);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newBook = {
            id: books.length + 1,
            title: title,
            author: author,
            imageURL: imageURL,
            datePublished: publishedDate,
            description: description,
            rating: rating,
            category: category,
            isRead: isRead,
            isFavorite: isFavorite
        }
        
        appendBook(newBook);
        clearForm();
    };

    const clearForm = () =>{
        setTitle("");
        setAuthor("");
        setImageURL("");
        setPublishedDate("");
        setDescription("");
        setRating(0);
        setCategory("");
        setIsRead(false);
        setIsFavorite(false);
    };

    return (
        <div className="add-book-form">
        <form onSubmit={handleSubmit} className="new-book-form">
            <label className="label" htmlFor="title">
                <span className="required">*</span>Title:
            </label>
            <input name = "title" 
                required
                id="title"
                type = "text" 
                placeholder="Title"
                onChange = {handleTitleChange}
                value = {title}
            />
            <br />

            <label htmlFor="author"><span className="required">*</span>Author:</label>
            <input name="author"
                required
                id="author"
                type="text"
                placeholder="Author"
                onChange={handleAuthorChange}
                value={author}
            />
            <br />

            <label htmlFor="imageURL">Image URL:</label>
            <input name="imageURL"
                id="imageURL"
                type="text"
                placeholder="Image URL"
                onChange={handleImageURLChange}
                value={imageURL}
            />
            <br />

            <label htmlFor="publishDate">Date Published:</label>
            <input name="publishDate"
                id="publishDate"
                type="date"
                onChange={handlePublishedDateChange}
                value={publishedDate}
            />
            <br />

            <label htmlFor="description">Description:</label>
            <textarea name="description"
                id="description"
                rows={3}
                cols={15}
                placeholder="Description"
                onChange={handleDescriptionChange}
                value={description}
            />
            <br />

            <label>Rating:</label>
            <input name="rating"
                id="1"
                value={1}
                type="radio"
                onChange={handleRatingChange}
                checked={rating === 1}
            />
            <label htmlFor="1">1</label>
            <input name="rating"
                id="2"
                value={2}
                type="radio"
                onChange={handleRatingChange}
                checked={rating === 2}
            />
            <label htmlFor="2">2</label>
            <input name="rating"
                id="3"
                value={3}
                type="radio"
                onChange={handleRatingChange}
                checked={rating === 3}
            />
            <label htmlFor="3">3</label>
            <input name="rating"
                id="4"
                value={4}
                type="radio"
                onChange={handleRatingChange}
                checked={rating === 4}
            />
            <label htmlFor="4">4</label>
            <input name="rating"
                id="5"
                value={5}
                type="radio"
                onChange={handleRatingChange}
                checked={rating === 5}
            />
            <label htmlFor="5">5</label>
            <br />

            <label>Category:</label>
            <select onChange={handleCategoryChange} value={category}>
                <option value="" disabled hidden>Choose Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Poetry">Poetry</option>
                <option value="Drama">Drama</option>
                <option value="Biography">Biography</option>
                <option value="History">History</option>
                <option value="Science">Science</option>
                <option value="Technology">Technology</option>
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Travel">Travel</option>
                <option value="Cooking">Cooking</option>
                <option value="Gardening">Gardening</option>
            </select>
            <br />

            <label htmlFor="readFlag">Previously Read: </label>
            <input name="isRead" id="readFlag" type="checkbox" onChange={handleReadChange} checked={isRead}></input>
            <br />

            <label htmlFor="favoriteFlag">Favorite: </label>
            <input name="isFavorite" id="favoriteFlag" type="checkbox" onChange={handleFavoriteChange} checked={isFavorite}></input>
            <br />

            <button>Create Book</button>
        </form>
        </div>
    );
};

export default AddBook;
