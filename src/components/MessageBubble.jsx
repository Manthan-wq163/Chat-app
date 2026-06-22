function MessageBubble(props) {
    const bubbleClass = props.isSent ? 'message sent' : 'message received';

    return (
        <div className={bubbleClass}>
            <p>{props.text}</p>
        </div>
    )
}

export default MessageBubble