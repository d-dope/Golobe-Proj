
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
  
    if (message !== '') {
      const chatMessages = document.querySelector('.chat-messages');
  
      // User message
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message');
      userMessageElement.textContent = message;
      chatMessages.appendChild(userMessageElement);
  
      // Auto-generated support response
      const supportResponseElement = document.createElement('div');
      supportResponseElement.classList.add('message', 'support-response');
      supportResponseElement.textContent = 'Support will answer soon...';
      chatMessages.appendChild(supportResponseElement);
  
      messageInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  
  // Event listener
  document.getElementById('send-button').addEventListener('click', sendMessage);
  document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });