import LiveChatBox from "./LiveChatBox";
import TagBar from "./TagBar";

function StreamSection() {
  return (
    <div className="stream-section">
      <TagBar />
      <div className="stream-content">
        <div className="stream-video">
          <div className="video">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/KkY3JGDqMT8"
                title="One year in 2 minutes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
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


