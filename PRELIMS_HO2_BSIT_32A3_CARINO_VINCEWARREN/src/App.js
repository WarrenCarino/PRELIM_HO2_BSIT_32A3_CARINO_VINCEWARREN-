import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
    <header>
      <nav>
        <h1 className="logo" id="logos">
          WC
        </h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
 
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, it's <span>Warren</span>
        </h1>
        <h2>BSIT 32A3</h2>
        <p>
          "My academic interest is in pursuing a Bachelor of Science in
          Information Technology (BSIT) with the goal of becoming a full-stack
          software engineer, mastering both front-end and back-end development
          to build complete and efficient applications."
        </p>
      </div>
    </section>
 
    <section id="about" className="about-content">
      <h2>About</h2>
      <p>
        <strong>Education:</strong>
        <br />
        - Elementary: Saint Sebastian School Inc.
        <br />
        - High School: Lakeshore Educational Institution
        <br />
        - Senior High School: AMA College Biñan
        <br />
        - College: Lyceum of Alabang (BSIT 32A3)
        <br />
        <br />
        <strong>Academic Achievements:</strong>
        <br />
        - 2nd place in a flute contest at Lyceum of Alabang.
        <br />
        <br />
        <strong>School Activities:</strong>
        <br />
        - Participated in various school events and contests.
        <br />
        - Interested in basketball and online games.
        <br />
        <br />
        <strong>Skills:</strong>
        <br />
        - Good communication skills.
        <br />
        - Coding (Visual Basic, Dart & Flutter, Web Development).
        <br />
      </p>
    </section>
    <section id="hobbies">
      <h2>Hobbies</h2>
      <p>
        I enjoy playing online games, watching movies, and playing basketball.
      </p>
      <button
        onClick={() =>
          alert(
            "My hobbies are playing online games, watching movies, and playing basketball!"
          )
        }
      >
        Show Hobbies
      </button>
    </section>
 
    <section id="contact">
      <h2>Contact</h2>
      <p>Vince Warren S. Carino</p>
      <p>Email: warrencarino@gmail.com</p>
    </section>
 
    <footer>
      <section id="footer">
        <p>&copy; 2025 Vince Warren Carino. All rights reserved.</p>
      </section>
    </footer>
  </div>
);
}

export default App;