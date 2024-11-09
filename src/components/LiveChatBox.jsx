function LiveChatBox() {
  return (
    <div className="chat-box">
      <div className="chat-header">Live Chat</div>
      <div className="chat-content">
        <div className="chat-message">
          <span className="username">User699:</span> So, be honest—do they
          actually care about mental health, or is it more like ‘Here’s a random
          meditation app, good luck’?
        </div>
        <div className="chat-message">
          <span className="username">User11:</span> What is the recruiting
          process for the junior software dev position?
        </div>
        <div className="chat-message">
          <span className="username">User55:</span> If you could describe your
          ideal new hire in three words, what would they be?
        </div>
        <div className="chat-message">
          <span className="username">User420:</span> Yo, so on a scale of
          ‘stress ball’ to ‘zen master,’ how much does the company actually care
          about our mental health?
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
      <div className="chat-reactions-container">
        <div className="chat-reactions">
          <button className="react-btn">100 💙</button>
          <button className="react-btn">20 😂</button>
        </div>
      </div>
    </div>
  );
}

export default LiveChatBox;
