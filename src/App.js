import "./App.css";
import Avatar from "./Avatar";
import SkillList from "./SkillList";
import Summary from "./Summary";

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
