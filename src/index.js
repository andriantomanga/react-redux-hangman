// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import hangmanReducer from './reducers';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const store = configureStore({
//   reducer: {
//       hangman: hangmanReducer
//   }
// });


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// reportWebVitals();

// =====
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import hangmanReducer from './reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    hangman: hangmanReducer
  }
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();



