import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          <span className="bold">Senior Product Manager </span>
          Passionate about product managment, UX, photogprhay, IA, beer, and dogs.
          <div className="emoji">
            &nbsp;☕ &nbsp; 🥃&nbsp; 📷&nbsp; 🐶&nbsp; 🎮&nbsp;
          </div>
        </div>
      </div>
    )
  }
}

export default About
