import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";
import Team4 from "../assets/team4.jpg";

const About = () => {
  return (
    <>
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <div className="w3-row-padding w3-grayscale">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src={Team1} alt="John" style={{ width: "100%" }} />
          <h3>Kevin Lancaster</h3>
          <p className="w3-opacity">Owner</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <img src={Team2} alt="Jane" style={{ width: "100%" }} />
          <h3>John Doe</h3>
          <p className="w3-opacity">Lead</p>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
