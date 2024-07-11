import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame } from '../reducers';
import { useNavigate } from 'react-router-dom';
import HangmanImages from './HangmanImages';

const FailurePage = () => {
    const dispatch      = useDispatch();
    const navigate      = useNavigate();
    const word          = useSelector((state) => state.hangman.word);
    const definition    = useSelector((state) => state.hangman.definition);

    const handleReplay = () => {
        dispatch(resetGame());
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Malheureusement, vous avez échoué !</h1>
            <p>Vous êtes pendu.e !</p>
            <div>
                <HangmanImages remainingAttemps={11} />
            </div>
            <p>Le mot recherché était <b>{word}</b> ({definition})</p>
            <button onClick={handleReplay}>Rejouer</button>
        </div>
    );
};

export default FailurePage;