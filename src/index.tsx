import firebase from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom'
import Octane from './Components/Octane'

firebase.initializeApp({
  apiKey: 'AIzaSyDnALgfWLrlvIRzVB8JUm8TnVZBUEHzS4Y',
  authDomain: 'tic-tac-tachanka.firebaseapp.com',
  projectId: 'tic-tac-tachanka',
  storageBucket: 'tic-tac-tachanka.appspot.com',
  messagingSenderId: '577559263875',
  appId: '1:577559263875:web:3adc6bbd84d347d6ef39b6',
  measurementId: 'G-5KGNRSLQ8Y',
})

ReactDOM.render(<Octane />, document.getElementById('root'))
