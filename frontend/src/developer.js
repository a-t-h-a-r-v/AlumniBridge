import React from 'react';
import './developer.css';
function Developer() {
    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Developer Page</title>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
        />
        <div className="grid-container">
        <section id="developer-cards">
        <div className="content">
        <div className="developer-container">
        <div className="profile-photo">
        <img
        src="https://avatars.githubusercontent.com/u/168991836?v=4"
        alt="Developer Photo"
        />
        </div>
        <div className="developer-box">
        <h4>Akhilesh Joshi</h4>
        <p>This is a brief description of the developer.</p>
        <div className="icons">
        <a href="">
        <img src="./assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/akhileshj2004">
        <img src="./assets/github-icon.png" alt="GitHub" />
        </a>
        <a href="">
        <img src="./assets/gmail-icon.png" alt="Gmail" />
        </a>
        </div>
        </div>
        </div>
        <div className="developer-container">
        <div className="profile-photo">
        <img src="developer-photo.jpg" alt="Developer Photo" />
        </div>
        <div className="developer-box">
        <h4>Atharv Shirgurkar</h4>
        <p>This is a brief description of the developer.</p>
        <div className="icons">
        <a href="">
        <img src="./assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/a-t-h-a-r-v">
        <img src="./assets/github-icon.png" alt="GitHub" />
        </a>
        <a href="">
        <img src="./assets/gmail-icon.png" alt="Gmail" />
        </a>
        </div>
        </div>
        </div>
        <div className="developer-container">
        <div className="profile-photo">
        <img
        src="https://avatars.githubusercontent.com/u/120473716?v=4"
        alt="Developer Photo"
        />
        </div>
        <div className="developer-box">
        <h4>Rutika Wagalekar</h4>
        <p>This is a brief description of the developer.</p>
        <div className="icons">
        <a href="">
        <img src="./assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/RutikaW1155">
        <img src="./assets/github-icon.png" alt="GitHub" />
        </a>
        <a href="">
        <img src="./assets/gmail-icon.png" alt="Gmail" />
        </a>
        </div>
        </div>
        </div>
        <div className="developer-container">
        <div className="profile-photo">
        <img
        src="https://avatars.githubusercontent.com/u/182062771?v=4"
        alt="Developer Photo"
        />
        </div>
        <div className="developer-box">
        <h4>Saniya Kadarbhai</h4>
        <p>This is a brief description of the developer.</p>
        <div className="icons">
        <a href="">
        <img src="./assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/SaniyaKadarbhai">
        <img src="./assets/github-icon.png" alt="GitHub" />
        </a>
        <a href="">
        <img src="./assets/gmail-icon.png" alt="Gmail" />
        </a>
        </div>
        </div>
        </div>
        </div>
        </section>
        <section id="description-section">
        <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida ante
        habitasse nullam sodales finibus platea. Ex euismod ex maecenas montes
        torquent; facilisi eleifend sodales. Netus ultrices ultricies luctus in
        pretium a pellentesque. Orci conubia consequat at sapien ridiculus
        fringilla taciti. Arcu litora viverra conubia commodo vel potenti est.
        Felis orci tellus sociosqu dui id. Praesent magna habitant dictumst a
        per. Magnis non vitae ligula id nunc ad consequat tellus sagittis.
        Aliquam condimentum proin pharetra facilisis fringilla hac; varius
        vulputate. Sodales ultricies nostra vestibulum aptent ante. Adipiscing
        neque mollis mauris commodo viverra ornare platea himenaeos. Ante
        ultricies egestas morbi penatibus etiam, gravida enim interdum. Magnis
        class nunc ultricies hendrerit fames magna. Egestas montes vel cursus
        libero ridiculus.{" "}
        </p>
        </section>
        </div>
        </>
    );
}

export default Developer;
