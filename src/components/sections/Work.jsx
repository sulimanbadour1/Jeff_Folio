import { v4 as uuidv4 } from "uuid";
import { work } from "/src/data.js";
import Card from "/src/components/elements/Card";
import "/src/stylesheets/sections/Work.css";
import Projects from "./Projects";

const Work = () => {
  return (
    <section className="Work section" id="work">
      <div className="container">
        <h2 className="Work-h2 section-head">Projects.</h2>

        {/* {work.map((c) => (
            <Card
              name={c.name}
              description={c.description}
              stack={c.stack}
              linkProject={c.linkProject}
              linkGithub={c.linkGithub}
              key={uuidv4()}
            />
          ))} */}
        <Projects />
      </div>
    </section>
  );
};

export default Work;
