import "../../stylesheets/elements/CardExp.css";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience, theme }) => {
  return (
    <>
      {theme === "light" && (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#282F43",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "6px solid  #232631" }}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div className="outerdiv">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="imgIcon"
              />
            </div>
          }
        >
          <div>
            <h3 className="headerOne">{experience.title}</h3>
            <p className="headerTwo" style={{ margin: 0 }}>
              {experience.company_name}
            </p>
          </div>
          <ul className="expPoint">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="listPoint">
                {point}
              </li>
            ))}
          </ul>
          <div>
            <p className="headerTwo" style={{ marginTop: 12 }}>
              {experience.date}
            </p>
          </div>
        </VerticalTimelineElement>
      )}
      {theme === "dark" && (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#E2E4E9",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "6px solid  #E2E4E9" }}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div className="outerdiv">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="imgIcon"
              />
            </div>
          }
        >
          <div>
            <h3 className="headerOne">{experience.title}</h3>
            <p className="headerTwo" style={{ margin: 0 }}>
              {experience.company_name}
            </p>
          </div>
          <ul className="expPoint">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="listPoint">
                {point}
              </li>
            ))}
          </ul>
          <div>
            <p className="headerTwo" style={{ marginTop: 12 }}>
              {experience.date}
            </p>
          </div>
        </VerticalTimelineElement>
      )}
    </>
  );
};

export default ExperienceCard;
