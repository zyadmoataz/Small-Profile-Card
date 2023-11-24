import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const skills = [
  {
    skill: "HTML 5 + CSS 3",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#D5D5D5",
  },
  {
    skill: "React JS",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Bootstrap 5",
    level: "beginner",
    color: "#FF3B00",
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="zyad.jpg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <>
      <h1>Zyad Moataz</h1>
      <p>
        A passionate frontend developer dedicated to crafting engaging and
        user-centric web experiences. With a solid foundation in HTML5, CSS3,
        Sass, React JS, and Bootstrap, I bring creativity and technical
        expertise to every project.
      </p>
    </>
  );
}

function SkillList() {
  const skillArray = skills;
  return (
    <ul className="skill-list">
      {skillArray.map((skill) => (
        <Skill
          skillObj={skill.skill}
          colorObj={skill.color}
          levelObj={skill.level}
        />
      ))}
    </ul>
  );
}

function Skill({ skillObj, colorObj, levelObj }) {
  let emoji = "";
  if (levelObj === "advanced") {
    emoji = "💪";
  } else if (levelObj === "intermediate") {
    emoji = "👍";
  } else {
    emoji = "👶";
  }
  return (
    <li className="skill" style={{ backgroundColor: colorObj }} key={skillObj}>
      {skillObj} {emoji}
    </li>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
