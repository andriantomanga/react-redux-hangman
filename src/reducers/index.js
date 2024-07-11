import { createSlice } from '@reduxjs/toolkit';
import wordsData from '../data/words.json';

export const INITIAL_ATTEMPTS = 8;

const words = wordsData.map(entry => ({
    word: entry.word,
    definition: entry.definition
}));

const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

const initialState = {
    ...getRandomWord(),          
    guessedLetters: [],     
    remainingAttempts: INITIAL_ATTEMPTS,
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

        resetGame: (state) => {
            const newWord = getRandomWord();
            state.word = newWord.word;
            state.definition = newWord.definition;
            state.guessedLetters = [];
            state.remainingAttempts = INITIAL_ATTEMPTS;
            state.isWordGuessed = false;
        }
    }
});

export const { guessLetter, resetGame } = hangmanSlice.actions;
export default hangmanSlice.reducer;