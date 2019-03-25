import React from "react";
import './GifCard.css';

const GifCard = (props) => {
    console.log(props.images[0].images)
    return (
        <div>
            <img src={props.images[0].images.fixed_width_small.url} alt="gif" />
            <a href="https://media.giphy.com/media/3o6gb9DHccZdmsNSgg/giphy.gif" download><i class="fas fa-arrow-down"></i></a>
        </div>
    )
}

export default GifCard;