import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../reducers';
import { useNavigate } from 'react-router-dom';

const FailurePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleReplay = () => {
        dispatch(resetGame());
        navigate('/');
    };

    return (
        <div>
            <h1>Malheureusement, vous avez échoué !</h1>
            <p>Vous êtes pendu.e !</p>
            <button onClick={handleReplay}>Rejouer</button>
        </div>
    );
};

export default FailurePage;