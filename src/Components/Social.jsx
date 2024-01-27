import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://join.skype.com/invite/x2fCV0PeGNjv" className="home__social-icon" target='_blank' rel="noreferrer noopener">
            <i className="uil uil-skype"></i>
        </a>
       
        <a href="https://www.linkedin.com/in/chirag-wadyalkar-b723b9220/" className="home__social-icon" target='_blank' rel="noreferrer noopener">
        <i className="uil uil-linkedin"></i>
        </a>
       
        <a href="https://github.com/cwadyalkar" className="home__social-icon" target='_blank' rel="noreferrer noopener">
        <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social