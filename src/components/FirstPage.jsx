import React from 'react'
import profile from './img/me.jpg'
import background from './img/background.png'

const FirstPage = () => {
  return (
    <div id="first-page">
        <img id="first-page-image" src={background} />
        <div><h1>Hello, my name is Malin Schoening</h1>
        <h3>and welcome to jackass</h3></div>
    </div>
  )
}

export default FirstPage
