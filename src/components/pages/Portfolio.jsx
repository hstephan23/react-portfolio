export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <section id="project_pieces">
            <h2 id="work">My Work</h2>
            <a id="portfolio">
                    <img src="src/assets/portfolio.png" alt="Image of Portfolio Page" className="images" />
                    <section className="">
                        <h3 className="project-title"><a href="https://hstephan23.github.io/portfolio-challenge/index.html#about_me">Static Portfolio</a></h3>
                        <p className="project-title">CSS/HTML</p>
                        <p><a href="https://github.com/hstephan23/portfolio-challenge">Repository</a></p>
                    </section>
            </a>
            <a id="horoscope">
                    <img src="src/assets/horoscope.png" alt="Image of Horoscope Page" className="images" />
                    <section className="front_text">
                        <h3><a href="https://hstephan23.github.io/astrology-project/">Horoscope Site</a></h3>
                        <p>CSS/HTML/JavaScript</p>
                        <p><a href="https://github.com/hstephan23/astrology-project">Repository</a></p>
                    </section>
            </a>
            <a id="password">
                    <img src="src/assets/password.png" alt="Image of Password Generator Page" className="images" />
                    <section className="front_text">
                        <h3><a href="https://hstephan23.github.io/password_generator_challenge/">Password Generator</a></h3>
                        <p>CSS/HTML/JavaScript</p>
                        <p><a href="https://github.com/hstephan23/password_generator_challenge">Repository</a></p>
                    </section>
            </a>
            <a id="music">
                    <img src="src/assets/music.png" alt="Image of Music Page" className="images" />
                    <section className="front_text">
                        <h3><a href="https://daily-music-posts-6e938fa20b09.herokuapp.com">Daily Music Posts</a></h3>
                        <p>Node.js/Handlebars/Sequelize</p>
                        <p><a href="https://github.com/hstephan23/daily-music-posts">Repository</a></p>
                    </section>
            </a>
            <a id="weather">
                    <img src="src/assets/weather.png" alt="Image of Weather Page" className="images" />
                    <section className="front_text">
                        <h3><a href="https://hstephan23.github.io/weather-challenge/">Weather Site</a></h3>
                        <p>CSS/HTML/JavaScript</p>
                        <p><a href="https://github.com/hstephan23/weather-challenge">Repository</a></p>
                    </section>
            </a>
            <a id="text">
                    <img src="src/assets/text.png" alt="Image of Text Editor Page" className="images" />
                    <section className="front_text">
                        <h3><a href="https://text-editor-challenge-hstephan.onrender.com/">Text Editor</a></h3>
                        <p>Node.js/Express/MongoDB</p>
                        <p><a href="https://github.com/hstephan23/text-editor-challenge">Repository</a></p>
                    </section>
            </a>
        </section>
      </div>
    );
  }
  