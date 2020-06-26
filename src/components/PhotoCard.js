import React from "react";

const PhotoCard = ({image, title, date, explanation }) => {

    return (
        <div className = 'dataPresentation'>
            <img src = {image} alt = {title} />
            <h2>The Title: {title}</h2>
            <p>The Date: {date}</p>
            <p>The Story: {explanation}</p>
        </div>
    );
};

export default PhotoCard;