import React from 'react'
import './portfoilo.css'
import IMG from '../../assets/img1.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfoilo__item-image'>
            <img src={IMG} alt=""/>
          </div>
          <h3>Book Hub Mini Project Using React</h3>
          <div className='portfoilo__item-cta'>
          <a href="https://github.com/Krishna199706/Book-hub" className='btn' target='_blank'>Github</a>
          <a href="https://krishnabookhub.ccbp.tech/login" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfoilo__item-image'>
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png" alt=""/>
          </div>
          <h3>Food Munch Mini Restarunt</h3>
          <div className='portfoilo__item-cta'>
          <a href="https://github.com/Krishna199706/Book-hub" className='btn' target='_blank'>Github</a>
          <a href="https://foodmunchclone.ccbp.tech/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfoilo__item-image'>
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goldentemple1-img.png" alt=""/>
          </div>
          <h3>Tourism Details</h3>
          <div className='portfoilo__item-cta'>
          <a href="https://github.com/Krishna199706/Tourism" className='btn' target='_blank'>Github</a>
          <a href="https://tourismplan1997.ccbp.tech/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
