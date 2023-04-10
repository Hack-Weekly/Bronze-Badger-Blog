import React, { Component } from 'react'


export default class Landing extends Component(){
    redner(){
        return(
            <div className='landingPage-div'>
                 <h1 id='landing-h1'>Welcome to Bronze Badger Blog</h1>
                 <h3 id='landing-h3'>A blog where users are able to post, read and interact with other blog posts</h3>
                 <button id='landing-btn'>Sign up</button>
            </div>
        )
    }
} 