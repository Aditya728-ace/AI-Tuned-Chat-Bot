function sendMessage() {
    const userInput = document.getElementById('user_input').value;
    const messagesDiv = document.getElementById('messages');

    messagesDiv.innerHTML += `<div class="message user">USER:   ${userInput}</div>`;
    
    eel.get_response(userInput)(function(response) {
        messagesDiv.innerHTML += `<div class="message bot">CHATBOT: ${response}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight; 
    });

    document.getElementById('user_input').value ='';
}

document.querySelector('.send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        // Append the message to the chat
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<div class="message user">${messageText}</div>`;
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});


