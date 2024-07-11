import { createSlice } from '@reduxjs/toolkit';
import wordsData from '../data/words.json';

const words = wordsData.map(entry => entry.word);

const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

const initialState = {
    word: getRandomWord(),          
    guessedLetters: [],     
    remainingAttempts: 5,
    isWordGuessed: false   
};

const hangmanSlice = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
        guessLetter: (state, action) => {
            const letter = action.payload.toUpperCase();
            if (state.guessedLetters.includes(letter)) {
                return;
            }

            state.guessedLetters = [...state.guessedLetters, letter];
            if (!state.word.includes(letter)) {
                state.remainingAttempts -= 1;
            }

            if (state.word.split('').every(letter => state.guessedLetters.includes(letter))) {
                state.isWordGuessed = true;
            }

            state.isWordGuessed = state.word.split('').every(char => state.guessedLetters.includes(char));
        },

        resetGame: () => initialState
    }
});

export const { guessLetter, resetGame } = hangmanSlice.actions;
export default hangmanSlice.reducer;