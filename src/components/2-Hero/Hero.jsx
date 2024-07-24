import './Hero.css'

const Hero = () => {
  return (
    <section className="hero flex">
    <div className="left-section ">

      <div className="parent-avatar flex">
        <img src="./trac.png" className='avatar' alt=""></img>
        <div className="icon-verified"></div>
      </div>

      <h1 className='title'>Software deisgn, founder, and amateur astrounut.</h1>

      <p className='sub-title'>
        I am a software designer, founder, and amateur astrounut. based in new york city I'm the founder and CEO of plantaria, where we  develop technologes htat empor regular people to explore sapce on thier own terms
      </p>

      <div className="all-icons flex">
        <div className="icon icon-twitter"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-github-square"></div>
        <div className="icon icon-linkedin-square"></div>
      </div>
    </div>

    <div className="right-section border">
      animation
    </div>
    </section>
    );
  }

export default Hero