/*Photo by <a href="https://unsplash.com/@danielfazio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Fazio</a> on <a href="https://unsplash.com/photos/DzqeB43HfnE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/
import React from 'react'
import LoginRegisterCard from './LoginRegisterCard'
import './assets/styles/Landing.css'

export default function Landing() {
    return(
        <>
        <header className="image-container"></header>
        <main className="landing-main">
        <section className="landing-content">
         <h1>Bronze-Badger-Blog<br/>Where Your Thoughts Come to Life!</h1>
        <p>Are you passionate about writing and eager to share your thoughts with the world? Look no further! Our blog platform provides you with the perfect space to unleash your creativity and connect with like-minded individuals.</p>
        <h3>Why choose our blog platform?</h3>
        <ul>
        <li><b>Easy-to-use interface:</b> Our user-friendly platform makes it simple to create and manage your blog posts. With intuitive tools, you can customize your blog to reflect your unique style and brand.</li>
        <li><b>Wide audience reach:</b> Share your insights, stories, and expertise with our global community of readers. Gain exposure and connect with readers who are interested in your niche.</li>
        <li><b>Robust features:</b> From customizable themes and post scheduling to social media integration and analytics, our platform offers a plethora of features to enhance your blogging experience.</li>
        <li><b>Community engagement:</b> Join a vibrant community of bloggers who are passionate about their craft. Exchange ideas, collaborate, and learn from fellow bloggers to boost your skills and grow your network.</li>
        <li><b>Safe and secure:</b> We take your privacy seriously. Our platform employs advanced security measures to protect your data and keep your blog safe from unauthorized access.</li>
        </ul>
        </section>
        <LoginRegisterCard />
        </main>
        </>
    )
}

