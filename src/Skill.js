import "./App.css";

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

export default Skill;
