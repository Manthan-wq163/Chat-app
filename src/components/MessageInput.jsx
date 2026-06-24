function MessageInput() {
    return (
        <div className="chat-input-area">
            <input type="text" className="message-input" placeholder="Type a message..." />
            <button id="sendbtn">Send</button>
        </div>
    )
}

export default MessageInput;