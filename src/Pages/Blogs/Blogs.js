import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h5>Question:1 Difference between authorization and authentication?</h5>
            <p>Answer:In authorization the user or the person should be authorized by the authorities.As an example the user should put its name,email,password then the authorities give the access to the user.This process is authorization.On the other hand authentication is the process that checked that the exact user.As an example the user put the correct user email and password or not.Then the user should login in this process.</p>

            <h5>Question:2 Why are we using firebase? What other options do you have to implement authentication?</h5>
            <p>Answer:Firebase is a backend platfrom for building web,Android,IOS applications.It offers realtime database,multiple authentication types amd hosting platform.There are some authentication process in firebase authenticate by user Email and Password,Google,Facebook,Github,Twitter,Apple and many more.The user should verify by any one account for the process.</p>

            <h5>Question:3 What other services does firebase provide other than authentication?</h5>
            <p>Answer:Firebase provides realtime database,this service provides API to application developers.Its allows client data ,that means firebase stored data and hosing platfrom.Firebase also allows cloud messaging.That provides to the developer to provide connection betweem server and device so that message and notification are received without any cost.</p>
        </div>
    );
};

export default Blogs;