import React from "react";
import GifCard from "./GifCard";

const GifList = ({images}) => {
    const gifArray = images.map((gif,i) => {
        return <GifCard
                    url={gif.images.fixed_width.url}
                    key={i}
                />
    })
    
    return (
        <div className="cardWrapper">
           {gifArray}
        </div>
    )
}

export default GifList;