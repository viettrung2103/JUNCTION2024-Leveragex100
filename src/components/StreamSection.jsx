import LiveChatBox from "./LiveChatBox";
import TagBar from "./TagBar";

function StreamSection() {
  return (
    <div className="stream-section">
      <TagBar />
      <div className="stream-content">
        <div className="stream-video">
          <div className="video">
            <video width="100%" controls>
              <source src="your-video-file.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="company-bar">
            <img
              className="company-photo"
              src="company-profile-photo.jpg"
              alt="Company"
            />
            <div className="company-details">
              <div className="company-info">
                <div className="company-name">Leveragex100 Oy</div>
                <div className="live-title">
                  A morning routine at Leveragex100
                  <button className="live-btn">LIVE</button>
                </div>
              </div>
              <button className="follow-btn">
                <span>10K</span> Followers
              </button>
            </div>
          </div>
        </div>
        <div className="live-chat">
          <LiveChatBox />
        </div>
      </div>
    </div>
  );
}

export default StreamSection;
