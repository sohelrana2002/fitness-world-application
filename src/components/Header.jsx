import React from 'react'

const Header = ({title, image, children}) => {
  return (
    <header className='header'>
        <div className="header_container">
            <div className="header_containe_bg">
                <img src={image} alt="Header Background" />
            </div>
            <div className="header_content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header