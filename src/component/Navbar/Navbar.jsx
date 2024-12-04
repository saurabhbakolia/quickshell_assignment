function Navbar() {
  return (
    <div className="navbar">
      <button className="display-button">
        <img src={`${process.env.PUBLIC_URL}/assets/icons/Display.svg`} alt="Display Icon" /> 
        Display
        <img src={`${process.env.PUBLIC_URL}/assets/icons/down.svg`} alt="Down Icon" />
      </button>
    </div>
  );
}

export default Navbar;
