import React from "react";
import './GifCard.css';

const GifCard = ({url}) => {
    console.log(url)
    return (
        <div className="card">
            <img src={url} alt="gif" />
            <a href={url} download className="download"><i className="fas fa-arrow-down"></i></a>
        </div>
    )
}

export default GifCard;