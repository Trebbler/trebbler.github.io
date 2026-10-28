import me from './assets/teddie.png'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <img src={me} alt="Teddie" className="avatar"></img>
        <h1>Trebbler / Edmund (Filbert)</h1>
        <div>
            <p>Computer Science Student</p>
        </div>
        <nav>
            <a href="https://www.linkedin.com/in/edmund-filbert-priyono-18078b372/">LinkedIn</a> 
            <a href="https://github.com/Trebbler">GitHub</a> 
            <a href="https://leetcode.com/u/Trebble/">LeetCode</a>
        </nav>
      </header>
      <div className="Sections">
        <section>
          <h2>Coursework</h2>
            <div className="card">
              <h3>SAFE</h3>
                <p>Capstone Project with a team of 5.</p>
            </div>
        </section>
        <section>
          <h2>Projects</h2>
            <div className="card">
              <h3>Spamurai</h3>
                <p>Email scraper made in UniHack 2024</p>
            </div>
        </section>
        <section>
          <h2>Experience</h2>
            <div className="card">
              <h3>Monash College PM</h3>
                <p>Peer Mentor for Diploma of IT units</p>
            </div>
        </section>
      </div>
    </div>
  )
}

export default App
