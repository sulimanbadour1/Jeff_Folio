import { services } from "../../data";
import Service from "../elements/Service";
const Services = () => {
  return (
    <section className="Contact section" id="contact">
      <div className="container">
        <h2 className="Contact-h2 section-head">Services.</h2>
        {services.map((service) => {
          return <Service project={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
