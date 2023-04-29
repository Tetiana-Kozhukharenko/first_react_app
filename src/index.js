import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Post(props) {
  return (
    <div className="post">
      <div className="author">
        <img className="author-img" src={props.author.photo} alt={props.author.name} />
        <h2>{props.author.name}</h2>
        <i class="fa-regular fa-circle-check"></i>
        <p>{props.author.nickname}</p>
        <p>{props.date}</p>
      </div>
      <div className="content">
        <p>{props.content}</p>
        {props.image && <img src={props.image} alt="post" />}
      </div>
      <div className="interaction">
        <div>
          <i class="fa-regular fa-comment icon"></i>
          <span>482</span>
        </div>
        <div>
          <i class="fa-regular fa-heart icon"></i>
          <span>887</span>
        </div>
        <div>
          <i class="fa-solid fa-retweet icon"></i>
          <span>146</span>
        </div>
        <div>
        <i class="fa-solid fa-download icon"></i>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const ANAKIN_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhdf1CazcWlz0EB-5Km3N9mzdIIRpBIb0diapB_s_DrZGenq3xjkRLQ2vo8MbRGmiDbs&usqp=CAU";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
root.render(
    <Post author={{
      name: "Anakin Skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
}}
content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
image={RAY_IMAGE}
date={"26 лют."}
/>
);