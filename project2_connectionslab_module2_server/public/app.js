window.addEventListener('load', function () {
    //Open and connect socket
    let socket = io();

    //Listen for confirmation of connection
    socket.on('connect', function () {
        console.log("connected!");
    });


    //Reference to the chat box
    let chatBox = document.getElementById('chat-box-msgs');

    //All buttons
    let buttons = document.querySelectorAll('.buttons button');

    //Send the message of the clicked button to the server
    // create 7 event listeners (1 for each button)
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            let message = btn.innerText + " was voted";
            console.log("Sending:", message);
            socket.emit('vote', message);
        });
    });

    //Receive new messages from the server and display them
    socket.on('newMessage', function (data) {
        let msg = document.createElement('div');
        msg.classList.add('chat-message');
        msg.textContent = data;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight; // scroll to bottom
        //you can also do more lines here
    });

    //if I want to have more messages written on the chatbox
    // socket.on('userVoted', function (data) {
    //    console.log (data);
    // });
});
