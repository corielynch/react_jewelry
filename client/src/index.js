// Import React and React Dom
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'

// Take the react component and print to screen
ReactDOM.render(
    // for the footer style, please don't delete from 10-15 all together.
    <>

        <App />
    </>
    ,
    document.querySelector('#root')
)