import './SearchBar.css';
import {useState} from "react";


function SearchBar({onSubmit}) {

    const [text, setText] = useState('');

    const handleInput = (e) => {
        const textValue = e.target.value;
        setText(textValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
    }


    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label style={{display: 'block'}} htmlFor="searchInput">Search image:</label>
                <input onChange={handleInput} id="searchInput" value={text} name="search" type="text"/>
            </form>
        </div>
    );

}

export default SearchBar;
