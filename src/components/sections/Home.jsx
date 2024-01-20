import "/src/stylesheets/sections/Home.css";
import SocialLinks from "/src/components/elements/SocialLinks";
import { profile } from "/src/data.js";
import { Banner } from "../elements/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const { name, role, description } = profile;
  const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";
  const text = name;

  const interval = 100;
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }
  return (
    <section className="Home section" id="home">
      <div className="container">
        <div className="Home-caption">
          <span className="Home-hi">Hi I'm</span>
          <h1 className="Home-h1">{outputText + remainder}</h1>
          <h2 className="Home-h2">{role}</h2>
          <p className="Home-description">{description}</p>
          <SocialLinks />
        </div>
        <div className="Banner">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Home;
