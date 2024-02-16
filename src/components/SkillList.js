import "../App.css";
import Skill from "./Skill";

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

export default SkillList;
