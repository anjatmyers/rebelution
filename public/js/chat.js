const socket = io();

let chatUsername = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

socket.on('connect', ()=>{

    let chatForm = document.querySelector('form');

    chatForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        //sending posted message to server
        socket.emit('postMessage', {
            username: chatUsername.value, 
            message: chatMessage.value
        })

        chatMessage.value = '';
        chatMessage.focus();
    })// end of event listner

    socket.on('updateMessages', (data)=>{

        //grab the container to display messgage
        
        let chatDisplay = document.querySelector('.chat-display');
        let newMessage = document.createElement('p');

        if(chatUsername.value === data.username){
            newMessage.className = "chat-text";
        }
        else{
            newMessage.className = "text-secondary chat-text"
        }

        //<p class= "">username message</p>
        newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`;

        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    })


})