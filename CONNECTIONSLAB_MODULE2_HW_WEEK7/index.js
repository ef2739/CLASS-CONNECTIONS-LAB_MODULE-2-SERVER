// - **MAKE** a Node-Express app that stores/displays data using lowdb. Your homework should include the following:
// - Route 1 - Serve a static html page to the `“/”` route
let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("this is the main page")
})

app.use("/new-data", express.static("public"));


// - Route 2 - Store new data via the `“/new-data”` route:

app.get("/new-data", (request, response) => {
    //Send data as an object
    response.json(defaultData);
});
//     - Use `fetch()` on the client to make a **POST** request to your server


fetch('/new-data')
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.log(error)
    });

//     - Use `app.post()` on the server to listen for a **POST** request from the client to receive and store your data in a lowdb database

app.post('/newMessage', (request, response) => {
    // console.log(request.body);
});

import {
    Low
} from 'lowdb';
import {
    JSONFile
} from 'lowdb/node';

// - Respond to the client that the data was successfully stored



// - Route 3 - Serve stored data via the `“/data”` route.


// - Use `fetch()` on the client side to make a **GET** request to your server



// - Use `app.get()` on the server side to listen for the **GET** request from the client to request data from the database



// - Respond to the client with the data


// - Note - you can choose from the following prompts or come up with your own idea:
//     - Daily Creative Challenge, where users can submit their responses to a daily creative prompt
//     - A platform where users can share their favorite recipes
//     - An interactive mood journal, where users can log their daily moods
//     - A collaborative Story platform, where users can contribute to a collaborative story
// - **DEPLOY** your project to Github using VSCode Source control (see tutorial [here](https://docs.google.com/document/d/1I9elPKqdU-uk9iy8CfCqen162kDkU9oWRGVZpEX6tGk/edit?usp=drive_link)), then move to Render (see tutorial [here](https://docs.google.com/document/d/138WqjtFlKhJFV2Zl131fFbVxPPR-dw_uW9dsjJsee-E/edit?usp=sharing)) and share the link on [Weekly Homeworks Notion page](https://www.notion.so/78f9c29962ca4285803029da311dcac2?pvs=21) **by 11:59am ET (noon) on Tuesday**.








app.get("/", (req, res) => {
    res.send("this is the main page")
})

app.listen(5000, () => {
    console.log("listening at localhost:5000");
})




app.use("/new-data", express.static("public"));








const defaultData = {
    messages: []
};
const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);

//Set up the server
import express from 'express';
// let express = require('express');
let app = express();

//Serve static files from a public folder
app.use(express.static('public'));

//check for json and parse it (analizzalo)
app.use(express.json());

// a route to serve the data
app.get('/messages', (request, response) => {
    //Send data as an object
    // response.json(defaultData);
    db.read()
        .then(() => {
            //save the messages to an object
            let theData = {
                messages: db.data.messages
            };
            //send the messages to the client
            response.json(theData);
        });
});

//a route to collect the data
app.post('/newMessage', (request, response) => {
    let newMessage = request.body;
    newMessage.time = Date();

    //store data in an array
    // defaultData.push(newMessage);
    db.data.messages.push(newMessage)
    db.write()
        .then(() => {
            //send message back to the client
        });

    //create a message that indicates success in console
    response.json({
        'msg': 'Success'
    });

});

//Set port variable to listen for requests
let port = 3000;
app.listen(port, () => {
    console.log('Server listening on localhost:', port);
});

/*ROUTES */