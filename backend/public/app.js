class ChatApp {
  constructor() {
    this.socket = io();
    this.roomInput = document.getElementById('room');
    this.joinBtn = document.getElementById('join');
    this.chatContainer = document.getElementById('chat-container');
    this.chatDiv = document.getElementById('chat');
    this.msgInput = document.getElementById('message');
    this.sendBtn = document.getElementById('send');
    this.currentRoom = '';

    this.joinBtn.addEventListener('click', () => this.joinRoom());
    this.sendBtn.addEventListener('click', () => this.sendMessage());

    this.socket.on('chatMessage', data => this.appendMessage(data.sender, data.message));
    this.socket.on('userJoined', msg => this.appendMessage('BOT', msg));
  }

  joinRoom() {
    const room = this.roomInput.value.trim();
    if (room) {
      this.currentRoom = room;
      this.socket.emit('joinRoom', room);
      this.chatContainer.classList.remove('hidden');
      this.appendMessage('BOT', `Joined room ${room}`);
    }
  }

  sendMessage() {
    const msg = this.msgInput.value.trim();
    if (msg && this.currentRoom) {
      this.socket.emit('chatMessage', { room: this.currentRoom, message: msg });
      this.appendMessage('You', msg);
      this.msgInput.value = '';
    }
  }

  appendMessage(sender, message) {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${sender}:</strong> ${message}`;
    this.chatDiv.appendChild(div);
    this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ChatApp();
});
