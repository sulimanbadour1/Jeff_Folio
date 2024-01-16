import React from "react";
import ExperienceCard from "../elements/CardExp";
import { experiences } from "../../data";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "../../stylesheets/sections/WorkExp.css";
const WorkExperience = ({ theme }) => {
  return (
    <div>
      <section className="Work section" id="work">
        <div className="container">
          <h2 className="Work-h2 section-head">Experience.</h2>
          <div className="workExp">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
