import GitHubCalendar from "react-github-calendar";
import classes from "./github.module.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const GithubPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const theme = {
    level0: "#B3B6B7",
    level1: "#AF9164",
    level2: "#F93943",
    level3: "#6F1A07",
    level4: "#2B2118",
  };

  return (
    <>
      <section className={classes.github} id="github">
        <div className={classes.container}>
          <h2 data-aos="slide-right">Grafik Kontribusi</h2>

          <div className={classes.contributions} data-aos="fade-right">
            <GitHubCalendar
              username="salunaalavi"
              theme={theme}
              hideColorLegend
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GithubPage;
