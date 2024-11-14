# ClearConnect Web Application



<details>
<summary>Contents</summary>

* [Introduction](#introduction)<br>
* [Features & Specialities](#key-features--specialities)<br>
* [Techsacks used, installation, execution](#techstacks)<br>
* [Snippets of web application](#web-application-snippets)<br>
</details>





## Introduction


This is Node.js-based video call application that utilizes socket.io and peerjs libraries to establish peer-to-peer connections. It provides video-calling and real time chat functionality. Additionally, it offers features such as screen sharing and whiteboard sharing.



## Key Features & Specialities

* Group video and audio call
* Real time chat
* Screen share
* Audio and video controls
* View Participants
* Reminder Email
* Google Authentication
* Sharable whiteboard
* Dedicated Leave meeting option
* Easy to use UI


## Techstacks


### Techstacks used
* Node.js
* HTML
* CSS
* Bootstrap
* Javascript

### Libraries used

* Socket.io
* Express
* Peerjs
* Nodemailer
* Passport js
* dotenv
* uuid

### Installation

1. Clone the repository `git clone https://github.com/himanshu6956/Clear-Connect`

2. Install all packages and project dependencies `npm install`

3. To run the webapp on localhost generate your Google Oauth credentials from [Google Developer Console](https://console.cloud.google.com/ "google developer console") by creating a new project and set the URI to `localhost:3000` and callback URI `localhost:3000/auth/google/callback`

4. Create a .env file and add your Credentials here along with your Gmail ID and Password for Reminder Email message

### Execution

* Start the server `npm start` or `nodemon server.js`<br>


## Web Application Snippets


1. Google Authentication<br>

![google-authentication](./public/WebApp/login.png)<br>

2. After google authentication user can either choose to join a new meeting or join an existing meeting by entering the meeting-room ID<br>

![Start-page](./public/WebApp/newMeet.png)<br>

3. Meeting room<br>

![Select time and add participants](./public/WebApp/Reminder.png)<br>

4. Meeting room<br>

![Reminder-mail](./public/WebApp/Mail.png)<br>

5. Meeting room<br>

![Meeting-room](./public/WebApp/UserJoin.png)<br>
NOTE: Video of participant were kept off for security reasons<br>

6. Chat facility<br>

![Chat](./public/WebApp/chat.png)<br>

7. Screen-share feature<br>

![Screen-share](./public/WebApp/ScreenShare.png)<br>

8. Whiteboard<br>

![Whiteboard](./public/WebApp/WhiteBorard.png)<br>

9. Participant-list<br>

![Participant](./public/WebApp/Participants.png)<br>

10. Meeting Passcode<br>

![New-user](./public/WebApp/meetId.png)<br>

11. Alert everyone in the meeting when a participant leaves the meeting<br>

![leavemeet](./public/WebApp/UserLeft.png)<br>



>Happy Coding !!
