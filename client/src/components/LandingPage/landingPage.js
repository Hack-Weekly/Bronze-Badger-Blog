import React, { Component } from 'react'
import '.../App.css'

export default class Landing extends Component(){
    redner(){
        return(
            <div className='landingPage-div'>
                 <h1 className='landing-h1'>Welcome to Bronze Badger Blog</h1>
                 <h3 className='landing-h3'>A blog where users are able to post, read and interact with other blogs</h3>
                 <button className='landing-btn'>Sign up</button>
            </div>
        )
    }
}