import React from 'react'

export default function home() {
  return (
    <div className="Home">
      <section className="left">
        <div className="box">
        <h1>As Far As I Know...</h1>

        </div>
      </section>
      <section className="right">
        <header>
          <h2>AFAIK</h2>
        </header>
        <div className="main">
          <div className="text">
            <p>Have you ever explained something to someone that you were so sure you knew all about, only to realize that you were completely off? </p>
            <p>AFAIK is the place to put your knowledge to the test. Are you really sure you know what you think it is that you know? </p>
          </div>
          <div className="btn">
            <button>Find out</button>
            <p>Already a member? <span>Log in</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}
