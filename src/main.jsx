import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import '../style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





window.addEventListener('DOMContentLoaded', () => {

const messageInput = document.querySelector('.message-input');
const sendButton = document.querySelector('#sendbtn');
const messageList = document.querySelector('.message-list');


function handleSendMessage() {
  const typedText = messageInput.value;

  if(typedText.trim() !=="") {


     const newBubble = document.createElement('div');
     newBubble.classList.add('message', 'sent');

     const textParagraph = document.createElement('p');
     textParagraph.textContent = typedText;
     newBubble.appendChild(textParagraph);

     const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
     const timeSpan = document.createElement('span');
     timeSpan.textContent = currentTime;
     timeSpan.classList.add('chat-timestamp');
     newBubble.appendChild(timeSpan);

     messageList.appendChild(newBubble);

     newBubble.scrollIntoView({ behaviour: 'smooth'});

    messageInput.value = "";
  }
}

if(sendButton && messageInput && messageList) {

sendButton.addEventListener('click', handleSendMessage);

messageInput.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') {
    handleSendMessage();
  }
});

} else {
  console.error("Oops! JavaScript couldn't find your elements. Double check your HTML classes.");
}
});

