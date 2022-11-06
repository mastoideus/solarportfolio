import React from "react";
import Slider from "react-slick";
import { ProjectItem } from "./ProjectItem";
import bookstoreImg from "../assets/images/bookstoreImg.png";
import mountSpidersImg from "../assets/images/mountSpidersImg.png";
import imdbImg from "../assets/images/imdbImg.png";
import bugymanImg from "../assets/images/bugTrackerImg.png";

const PROJECTS_DATA = [
  {
    id: "p4",
    title: "Bugyman",
    tools: ["MERN Stack", "Redux Toolkit", "RTK query"],
    img: bugymanImg,
    url: "https://bugyman.onrender.com/",
  },
  {
    id: "p1",
    title: "IMDB Clone",
    tools: ["HTML", "CSS", "Javascript", "React"],
    img: imdbImg,
  },
  {
    id: "p2",
    title: "Bookstore",
    tools: ["HTML", "Tailwind", "Next.js", "MongoDB", "Express"],
    img: bookstoreImg,
    url: "https://bookstore-nextjs.vercel.app/",
  },
  {
    id: "p3",
    title: "Mount Spiders",
    tools: ["Unique Template using React.js"],
    img: mountSpidersImg,
    url: "https://flamboyant-wing-de40ea.netlify.app/",
  },
];

const ProjectsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,

    verticalSwiping: false,
    autoplay: true,
    arrows: false,

    autoplaySpeed: 5000,
    pauseOnHover: true,

    cssEase: "linear",
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Slider
        {...settings}
        style={{
          borderRadius: "50%",

          width: "100%",
          height: "100%",

          overflow: "hidden",
        }}
      >
        {PROJECTS_DATA.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              title={project.title}
              tools={project.tools}
              imageUrl={project.img}
              url={project.url}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectsSlider;
