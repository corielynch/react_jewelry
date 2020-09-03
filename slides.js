import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider'

const images = [
  'https://images/photo',
  'https://images/photo-',
  'https://images/photo',
  'https://images/photo'
]

ReactDOM.render(<Slider slides={images} />, document.querySelector('.main'))
