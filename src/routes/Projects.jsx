import Project1 from "../assets/house1.jpg";
import Project2 from "../assets/house2.jpg";
import Project3 from "../assets/house3.jpg";
import Project4 from "../assets/house4.jpg";
import Project5 from "../assets/house5.jpg";
import Project6 from "../assets/house6.jpg";
import Project7 from "../assets/house7.jpg";
import Project8 from "../assets/house8.jpg";

const Projects = () => {
  const projectsArray = [
    {
      id: 1,
      name: "Summer House",
      image: Project1,
    },
    {
      id: 2,
      name: "Brick House",
      image: Project2,
    },
    {
      id: 3,
      name: "Renovated",
      image: Project3,
    },
    {
      id: 4,
      name: "Barn House",
      image: Project4,
    },
    {
      id: 5,
      name: "Summer House",
      image: Project5,
    },
    {
      id: 6,
      name: "Brick House",
      image: Project6,
    },
    {
      id: 7,
      name: "Renovated",
      image: Project7,
    },
    {
      id: 8,
      name: "Barn House",
      image: Project8,
    },
  ];

  return (
    <>
      {/* <!-- Project Section --> */}
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>

      <div className="w3-row-padding">
        {projectsArray.map((project) => {
          return (
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  {project.name}
                </div>
                <img src={project.image} alt="Project" style={{ width: "100%" }} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
