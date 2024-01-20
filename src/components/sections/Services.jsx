import { services } from "../../data";
import Service from "../elements/Service";
const Services = ({ theme }) => {
  return (
    <section className="Contact section">
      <div className="container">
        <h2 className="Contact-h2 section-head">Services.</h2>
        {services.map((service) => {
          return (
            <Service project={service} key={service.title1} theme={theme} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
