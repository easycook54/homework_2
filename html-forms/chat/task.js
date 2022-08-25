'use strict'

const openChatActive = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const botMessages = [
    'Отошла на 5 минут!',
    'Ты кто тут такой?',
    'Давай, До свидания!',
    'Обеденный перерыв',
    'И что дальше?',
    'И....',
    'Пока...',
]


function openChat() {
    openChatActive.classList.add('chat-widget_active');
}

openChatActive.addEventListener('click', openChat);


function sendMessage() {
    let getData = new Date();
    getData = getData.toString().slice(16,21);
    document.getElementById('chat-widget__messages').innerHTML += `
    <div class="message message_client">
      <div class="message__time">${getData}</div>
      <div class="message__text">
        ${chatInput.value}
      </div>
    </div>
    `;
    chatInput.value = '';

    function botTalk() {
        let talk = botMessages[Math.floor(Math.random()* botMessages.length)];
        document.getElementById('chat-widget__messages').innerHTML += `
        <div class="message">
          <div class="message__time">${getData}</div>
          <div class="message__text">
            ${talk}
          </div>
        </div>
        `;

    }

    setTimeout(botTalk, 1000);
}


chatInput.addEventListener('change', sendMessage);