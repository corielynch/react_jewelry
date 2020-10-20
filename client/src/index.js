// Import React and React Dom
import React from 'react';
import ReactDOM from 'react-dom'
import reducers from './reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import App from './components/App.js';
import thunk from 'redux-thunk';

// combining middleware to redux store //
const store = createStore(reducers, applyMiddleware(thunk) )
// Take the react component and print to screen
ReactDOM.render(
    <div>
    {/* Provider allows our application to talk to redux and combine our apps reducers inside our createStore where we will reduce the data to state and store it inside our createdStore */}
    <Provider store={store}>
        <App />
    </Provider>
    </div>, document.querySelector('#root')
);


// Old version withour Redux //
//  Take the react component and print to screen
// ReactDOM.render(
//      for the footer style, please don't delete from 10-15 all together.
//  <>
//  <App />
//  </>, document.querySelector('#root')
//  );