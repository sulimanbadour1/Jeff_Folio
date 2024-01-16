import { useContext } from "react";
import { ThemeContext } from "/src/contexts/ThemeContext.jsx";
import Header from "/src/components/sections/Header";
import Home from "/src/components/sections/Home";
import Work from "/src/components/sections/Work";
import Stack from "/src/components/sections/Stack";
import Contact from "/src/components/sections/Contact";
import Footer from "/src/components/sections/Footer";
import ScrollToTop from "/src/components/elements/ScrollToTop";
import "/src/App.css";
import "/src/stylesheets/theme/theme.css";
import WorkExperience from "./components/sections/WorkExperience";
import Awards from "./components/sections/Awards";
import Slider from "./components/elements/Slider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" id="top" data-theme={theme}>
      <Header />
      <Home />

      <Work />
      <WorkExperience theme={theme} />
      <Stack />
      <Awards />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
