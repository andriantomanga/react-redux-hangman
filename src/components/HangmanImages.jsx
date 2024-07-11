import React from 'react';

const HangmanImages = ({ remainingAttemps }) => {
    const imagesFolder = '/images/';

    const getImagePath = (attempts) => {
        return `${imagesFolder}${attempts}.png`; 
    };

    const imagePath = getImagePath(remainingAttemps);
    return (
        <div>
            <img src={process.env.PUBLIC_URL + imagePath} 
            alt={`Essais restants : ${remainingAttemps}`}/>
        </div>
    );
};

export default HangmanImages;
