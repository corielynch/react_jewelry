import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
        )
    }
}
// Render class components to webpage //
ReactDOM.render(<App />, document.getElementById('root'))
