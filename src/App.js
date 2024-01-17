import "./App.css";

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Pedro Souza" />;
}

function Summary() {
  return (
    <div className="data">
      <h1>Pedro Souza</h1>
      <p>
        About Experienced and driven professional in the field of technology and
        software development, leveraging a strong foundation in computer science
        to innovate and create impactful solutions. With a solid background in
        software engineering and a proven track record in developing
        cutting-edge applications and systems, I am passionate about driving
        technological advancements.
      </p>
      <br />
      <p>
        Skilled in Ruby, Linux, Postgres, and Elasticsearch, I thrive in
        collaborative environments and have a keen eye for optimizing processes
        and delivering results. My journey in tech has been marked by a
        dedication to continuous learning and a commitment to driving positive
        change through technology.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <Summary />
    </div>
  );
}

export default App;
