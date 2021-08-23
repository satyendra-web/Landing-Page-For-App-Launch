import React from 'react'

function About(props) {
    return (
        <div id="about">
        <div className='about-image'>
            <img src={props.image} alt=""/>
        </div>

        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum laboriosam, dolorem quas aut, nisi vero sequi eveniet neque consequuntur id asperiores nemo ut voluptates dicta, assumenda facere! Laborum, fugit porro!</p>
       
       <button>{props.button}</button>
        </div>
        </div>
    )
}

export default About
