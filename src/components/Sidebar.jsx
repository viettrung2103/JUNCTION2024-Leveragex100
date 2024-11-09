const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>LIVE</h3>
      <p>For you</p>
      <p>Following</p>
      <p>Explore</p>
      <p>Profile</p>
      <br></br>

      <h3>Other LIVEs</h3>
      <p>Company X 100</p>
      <p>Company Y 200</p>
      <p>Company Z 300</p>
      <div className="popup">
        <p>
          A company that you followed - Company A is LIVE now! <a>Click here</a>
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
