import React from 'react'

const Project = () => {
  return (
    <div className='projects'>
      <div className="projectContent">
        <h1>Projects</h1>
        <hr />
      </div>

      <div className="form">
        <div className="inputs">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>

        <div className="inputs">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>

        <div className="inputs">
          <label htmlFor="">Message</label>
          <input className='Message' type="text" />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>


  )
}

export default Project