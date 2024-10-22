import axios from "axios";

const searchImages = async (term) => {

    const API_KEY = '';
    const response =  await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID ' + API_KEY,
            'Accept-Version': 'v1'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;