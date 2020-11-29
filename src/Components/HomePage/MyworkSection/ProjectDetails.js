import React from "react";
import { animated, useSpring } from "react-spring";
import "./ProjectDetails.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectDetails = ({ project }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="col-md-4 p-3 text-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className="card-wrap">
          <div className="project-card p-3">
            <img className="w-75" src={project.image} alt="" />
            <h5
              className="my-3"
              style={{ fontWeight: "800", textTransform: "uppercase" }}
            >
              {project.name}
            </h5>
            <p className="p-3">{project.description}</p>
            <div>
              <ul className="d-flex flex-wrap technology-items">
                {project.technology.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details-content d-flex flex-wrap justify-content-center align-items-center">
            <div>
              <a
                style={{ display: "block" }}
                className="btn-brand m-2 p-2"
                target="_blank"
                rel="noreferrer"
                href={project.live}
              >
                Live Site
              </a>
              <a
                style={{ display: "block" }}
                className="btn-brand m-2 p-2"
                target="_blank"
                rel="noreferrer"
                href={project.gitHub}
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectDetails;
