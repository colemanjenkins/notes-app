import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const API_KEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "notes-app-65619.firebaseapp.com",
  databaseURL: "https://notes-app-65619.firebaseio.com",
  projectId: "notes-app-65619",
  storageBucket: "notes-app-65619.appspot.com",
  messagingSenderId: "51778102347",
  appId: "1:51778102347:web:201aa1ee0f60c3871519ce",
  measurementId: "G-SPEXK6BEVP"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
