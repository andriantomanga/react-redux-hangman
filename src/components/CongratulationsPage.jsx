import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../reducers';
import { useNavigate } from 'react-router-dom';
import HangmanImages from './HangmanImages';

const CongratulationsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleReplay = () => {
        dispatch(resetGame());
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Félicitations ! Vous avez deviné le mot.</h1>
            <p>Bravo !</p>
            <div>
            <HangmanImages remainingAttemps={10} />
            </div>
            <button onClick={handleReplay}>Rejouer</button>
        </div>
    );
};

export default CongratulationsPage;