const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const nodemailer = require('nodemailer');
const path = require('path');
const regexforms = require("./regex-forms");
//const crypto = require('crypto');
PORT = 5503;

app.use(express.static(path.join(__dirname, "client/build/")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/public", "index.html"));
});
app.use("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "FelipeGarciaDiazResume.pdf"));
})
app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, "404.html"));
});

let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: "yahoo",
    secure: false,
    auth: {
        user: "felupoke@yahoo.com",
        pass: "password"
    },
    debug: true,
    logger: true,
})
io.on("connection", (socket) => {
    console.log("user joined!");
    socket.on('test', (data) => {
        console.log(data);
    });
    let validate = regexforms.validator;
    socket.on("request-send-message", async (data) => {
        if(validate.email(data.email) && validate.phone(data.phone) && validate.message(data.message) && validate.name(data.name)) {
            console.log('A Guest Sent You A Message!', data.name);
            //data.name
            //data.email
            //data.phone
            //data.message
            let myMail = await transporter.sendMail({
                from: "felupoke@yahoo.com",
                to: "pylotwebdevelopment@gmail.com",
                subject: data.name + " || Portfolio Contact Request || Phone # " + data.phone,
                text: data.message + "\n" + data.email,

            })
            let confirmationMail = await transporter.sendMail({
                from: "felupoke@yahoo.com",
                to: data.email,
                subject: "Felipe Garcia Diaz, Web Development",
                text: "Hello " + data.name + ",\n\nI have recieved your message and will get back to you within 24-48 hours.\n\nThank you!"
            })
        } else {
            io.emit("reject-message");
            console.log("message sent incorrectly", data);
        }
    });
});

http.listen(PORT, () => {
    console.log("server started at port:", PORT);
});


