import Hero from "../assets/hero.png";

const Header = () => {
  return (
    <>
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: "1500px" }}
        id="home"
      >
        <img
          className="w3-image"
          src={Hero}
          alt="Architecture"
          width="1500"
          height="800"
        />
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-black w3-opacity-min">
              <b>BW</b>
            </span>{" "}
            <span className="w3-hide-small w3-text-light-grey">
              Burlwood LLC
            </span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
