import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import {useState} from "react";

function App() {

    const [imageList, setImageList] = useState([]);

    const handleSubmit = async (term) => {
        const response = await searchImages(term)
        setImageList(response);
    }
    return (
        <div className='container'>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={imageList} />
        </div>
    );
}

export default App;
