import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { guessLetter, resetGame }  from '../reducers';
import HangmanImages from './HangmanImages';
import './Hangman.css';

const Hangman = () => {
    const dispatch          = useDispatch();

    const word              = useSelector((state) => state.hangman.word);
    const definition        = useSelector((state) => state.hangman.definition);
    const guessedLetters    = useSelector((state) => state.hangman.guessedLetters);
    const remainingAttemps  = useSelector((state) => state.hangman.remainingAttempts);

    const navigate          = useNavigate();
    const isWordGuessed     = useSelector(state => state.hangman.isWordGuessed);


    const handleGuess = (event) => {
        const letter = event.target.value;
        dispatch(guessLetter(letter));
    }

    useEffect(() => {
        console.log(remainingAttemps);
        if (isWordGuessed) {
            navigate('/congratulations');
        } else if (remainingAttemps === 0) {
            navigate('/failure');
        }
    }, [isWordGuessed, remainingAttemps, navigate]);

    const renderAlphabet = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet.split('')
                .map((letter) => (
                    <button key={letter} value={letter} onClick={handleGuess} disabled={guessedLetters.includes(letter)} className="btn alphabet_letter">
                        {letter}
                    </button>
                ));
    };

    const renderWord = () => {
        return word.split('').map((letter, index) => (
            <span key={index} className="word_letter">
                {guessedLetters.includes(letter) ? letter : '_'}
            </span>
        ));
    };

    return (
        <div className="hangman-container">
        <div className="left-section">
            <h1>Jeu du Pendu</h1>
            <p>Mot à deviner: <b>{renderWord()}</b></p>
            <p>Indice: <b>{definition}</b></p>
            <div>
                {renderAlphabet()}
            </div>
            <button onClick={() => dispatch(resetGame())}>Réinitialiser le jeu</button>
        </div>
        <div className="right-section">
            <HangmanImages remainingAttemps={remainingAttemps} />
            <p>Essaies restants: <b>{remainingAttemps}</b></p>
        </div>
    </div>
    );
};

export default Hangman;