import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h1 className="text-3xl font-bold">Alex Merkel</h1>
            <img src="/assets/me.png" alt="Alex's Photo" className="img-fluid rounded-circle mt-4"/>
            <div className="mt-3">
              <a href="https://www.linkedin.com/in/alex-merkel-8750b0274/" className="text-dark me-3">
                <i className="fab fa-linkedin fa-2x icon"></i>
              </a>
              <a href="https://github.com/Alex-Merkel" className="text-dark me-3">
                <i className="fab fa-github fa-2x icon"></i>
              </a>
              <a href="mailto:kajen16@gmail.com" className="text-dark">
                <i className="fas fa-envelope fa-2x icon"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <p>
              Discovering my true passion in life was a quest that took me on a winding path. For years, I searched relentlessly,
              motivated by an unwavering desire to find my purpose. It all finally clicked when I had the opportunity to shadow a
              software engineer. I knew in that moment that I had found my calling, and I was determined to pursue it with everything I had.
            </p>
            <p>
              As a full-stack engineer, I thrive in the world of technology with an unwavering focus on crafting user-friendly,
              innovative solutions. I'm a backend development wizard, sculpting scalable and efficient applications that elevate
              performance, while also excelling in front-end development to create seamless user experiences. Complex technical 
              challenges are my playground, and I'm committed to designing solutions that leave a lasting impact.
            </p>
            <p>
              I understand that there are many talented individuals in the field with impressive qualifications. However, what
              sets me apart is my unwavering determination, my unrelenting passion for technology, and my proven ability to quickly
              adapt and learn. I believe that these qualities make me the best choice for any challenge, as I approach every project
              with the dedication and enthusiasm needed to excel and make a meaningful difference.
            </p>
            <p>
              Beyond the code, my interests are as diverse as my skills. I find solace in exploring our planet, embracing the
              thrill of hiking and immersing myself in the wonders of nature. As a devoted sports enthusiast, football captures
              my heart both as a spectator and an avid supporter. You can also find me immersing myself in captivating video game
              worlds, cherishing moments with my loved ones, and indulging my lifelong passion for automobiles, which has been a
              driving force in my life, fostered by my self-taught mechanic skills and an unwavering admiration for their intricate design and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About