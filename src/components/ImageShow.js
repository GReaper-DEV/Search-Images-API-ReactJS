function ImageShow({image}) {

    const truncateText = (text, length) => {
        if (!text){
            return '';
        }
        if (text.length <= length) {
            return text;
        }

        return text.substr(0, length) + '\u2026'
    }

    return (
         <div>
             <img src={image.urls.thumb} alt={image.alt_description}/>
             <h3>{image.alt_description}</h3>
             <div>{truncateText(image.description, 50)}</div>
         </div>
    );
}

export default ImageShow;
