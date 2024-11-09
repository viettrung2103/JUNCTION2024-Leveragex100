import LiveChatBox from "./LiveChatBox";
import TagBar from "./TagBar";
import companyProfile from "../assets/LEVAGE.png";

function StreamSection() {
  return (
    <div className="stream-section">
      <TagBar />
      <div className="stream-content">
        <div className="stream-video">
          <div className="video">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/2BDUjKNjQPs"
                title="LiveStream for Leveragex100"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="company-bar">
            <img className="company-photo" src={companyProfile} alt="Company" />
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

{
  /* <iframe
  width="866"
  height="487"
  src="https://www.youtube.com/embed/2BDUjKNjQPs"
  title="LiveStream for Leveragex100"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
