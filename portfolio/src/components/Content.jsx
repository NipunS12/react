import React from 'react'
import '../Styles.css';
import Img1 from '../background.png';
const Content = () => {
  return (
    <div className='Content'>
        <div className="contText">
            <h1>Hello, my name is <br />
            Madlyn Torff
            </h1>
            <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
            <div className="buttons">
          <button className='bt1'>Projects</button>
          <button className='bt2'>LinkedIn</button>
        </div>
        </div>
        
        <div className="yellowBox">
           <img src={Img1} alt="" /> 
        </div>

    </div>
  )
}

export default Content