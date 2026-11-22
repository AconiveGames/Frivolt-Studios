
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <Image
          src="/images/frivolt-logo.jpg"
          alt="Frivolt Originals"
          width={240}
          height={100}
          className="logo"
        />

        <nav>
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            INDEPENDENT GAME DEVELOPMENT STUDIO
          </p>

          <h1>
            PLAY <span>BEYOND</span>
          </h1>

          <p className="description">
            Original games, unique worlds and memorable
            experiences crafted from pure imagination.
          </p>

          <div className="actions">
            <a href="#games" className="primary-btn">
              Our Games →
            </a>
            <a href="#about" className="secondary-btn">
              About Us
            </a>
          </div>
        </div>

        <div className="hero-emblem">
          <Image
            src="/images/frivolt-emblem.jpg"
            alt="Frivolt emblem"
            width={360}
            height={360}
          />
        </div>
      </section>

      <section className="games" id="games">
        <h2>Our Games</h2>

        <div className="game-list">
          <article className="game-card dead-drive">
            <h3>DEAD DRIVE</h3>
            <p>High-speed arcade driving experience.</p>
          </article>

          <article className="game-card agniv">
            <span className="coming-soon">COMING SOON</span>
            <h3>AGNIV Chapter-1</h3>
            <p>An Indian Horror Epic</p>
          </article>
        </div>
      </section>


    <section className="about" id="about">
      <div className="about-content">
        <span className="about-label">ABOUT THE STUDIO</span>

        <h2>
          BEYOND GENRES.
          <span> BEYOND EXPECTATIONS.</span>
        </h2>

        <p>
          FRIVOLT ORIGINALS is an independent game development
          studio focused on creating original games, immersive
          worlds and memorable entertainment experiences.
        </p>

        <p>
          We believe creativity should never be confined by
          genres or conventional boundaries. Every idea has
          the potential to become a unique experience.
        </p>

        <div className="about-philosophy">
          We don't follow genres. We create experiences.
        </div>
      </div>
    </section>


    <footer id="contact" className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>FRIVOLT <span>ORIGINALS</span></h2>
          <p>
            An independent game development studio focused on
            creating original games, immersive worlds and
            memorable entertainment experiences.
          </p>
        </div>

        <div className="footer-info">
          <div>
            <span>FOUNDED</span>
            <p>2026</p>
          </div>

          <div>
            <span>BASED IN</span>
            <p>India</p>
          </div>

          <div>
            <span>PARENT COMPANY</span>
            <p>ACONIVE</p>
          </div>

          <div>
            <span>INDUSTRY</span>
            <p>Game Development</p>
          </div>
        </div>

        <div className="footer-connect">
          <h3>CONNECT WITH US</h3>
          <a
            href="https://www.instagram.com/frivoltoriginals/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a href="mailto:frivoltoriginals@gmail.com">
            Email ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FRIVOLT ORIGINALS. All Rights Reserved.</p>

        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
    </footer>
    </main>
  );
}
