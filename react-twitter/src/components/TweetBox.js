import React from 'react'
import "./TweetBox.css";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
      <div className="tweetBox__input"> 
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />

      <input placeholder="What's happening?"
      type="text"/>

     

      </div>
      <input className="tweetBox__imageInput"
      placeholder="Optional: Enter image URL"
      type="text"/> 
      <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>

    </div>
  )
}

export default TweetBox
