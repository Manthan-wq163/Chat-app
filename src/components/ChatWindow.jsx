import MessageInput from './MessageInput'
import MessageBubble from './MessageBubble'

function ChatWindow() {
    return (
        <main className="chat-area">

            <div className="chat-header">
                <h3>John Doe</h3>
            </div>

            <div className="message-list">

                <MessageBubble text="Hey! did you finish the setup?" isSent={false} />
                <MessageBubble text="Yes! It is running flawlessly." isSent={true} />
            </div>

            <MessageInput/>
            
        </main>
    )
}

export default ChatWindow