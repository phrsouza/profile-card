import "./App.css";

const profileData = {
  name: "Pedro Souza",
  description:
    "About Experienced and driven professional in the field of technology and software development, leveraging a strong foundation in computer science to innovate and create impactful solutions. With a solid background in software engineering and a proven track record in developing cutting-edge applications and systems, I am passionate about driving technological advancements. Skilled in Ruby, Linux, Postgres, and Elasticsearch, I thrive in collaborative environments and have a keen eye for optimizing processes and delivering results. My journey in tech has been marked by a dedication to continuous learning and a commitment to driving positive change through technology.",
  skills: [
    { name: "Ruby", level: "advanced", color: "red" },
    { name: "Rails", level: "advanced", color: "maroon" },
    { name: "Javascript", level: "intermediate", color: "yellow" },
    { name: "React", level: "beginner", color: "cyan" },
    { name: "Elixir", level: "intermediate", color: "purple" },
    { name: "DevOps", level: "intermediate", color: "gray" },
  ],
};

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Pedro Souza" />;
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skills.map((skill) => {
        return (
          <Skill name={skill.name} level={skill.level} color={skill.color} />
        );
      })}
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

function Summary(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Summary
          name={profileData.name}
          description={profileData.description}
        />
        <SkillList skills={profileData.skills} />
      </div>
    </div>
  );
}

export default App;
