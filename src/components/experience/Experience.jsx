import React from "react";
import "./experience.css";
import Sample from "../../assets/SampleVid.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Experience = () => {
  const videoProperites = [
    {
      id: 1,
      title: "Video 1",
      src: Sample,
      credit: "Video by Shiro",
    },
    {
      id: 2,
      title: "Video 2",
      src: Sample,
      credit: "Video by Shiro 2",
    },
    {
      id: 3,
      title: "Video 3",
      src: Sample,
      credit: "Video by Shiro 3",
    },
  ];

  return (
    <section id="experience">
      <h1>My work</h1>
      <Carousel className="main" useKeyboardArrows>
        {videoProperites
          ? videoProperites.map((item) => (
              <div className="video">
                <video src={item.src} controls autoPlay>
                  Your browser does not support the video tag.
                </video>
                <p className="legend">{item.title}</p>
              </div>
            ))
          : null}
      </Carousel>
    </section>
  );
};

export default Experience;