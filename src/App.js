import "./App.css";

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Pedro Souza" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Ruby" level="advanced" color="red" />
      <Skill name="Rails" level="advanced" color="maroon" />
      <Skill name="Javascript" level="intermediate" color="yellow" />
      <Skill name="React" level="beginner" color="cyan" />
      <Skill name="Elixir" level="intermediate" color="purple" />
      <Skill name="DevOps" level="intermediate" color="gray" />
    </div>
  );
}

function Skill(props) {
  let levelEmoji = null;
  switch (props.level) {
    case "beginner":
      levelEmoji = "👶";
      break;
    case "intermediate":
      levelEmoji = "👍";
      break;
    case "advanced":
      levelEmoji = "💪";
      break;
    default:
      levelEmoji = "👻";
  }

  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {levelEmoji}
    </div>
  );
}

function Summary() {
  return (
    <div>
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
      <div className="data">
        <Summary />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
