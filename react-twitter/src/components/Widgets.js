import React from "react"
import "./Widgets.css"
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Button } from "@mui/material";

const Widgets = () => {
  return (
  <div className="widgets">
    <div className="widgets__input">
    <SearchIcon className="widgets__searchIcon" />
    <input placeholder="Search Twitter" type="text" />
    </div>

    <div className="widgets__widgetContainer">
    <h2>Subscribe to Premium</h2>
    <p>Subscribe to unlock new features and if eligible, receive 
    a share of ads revenue.</p>

    <Button>Subscribe</Button>
    
    </div>
    

    <TwitterTweetEmbed tweetId={"1706368022116491685"} />

    <TwitterTimelineEmbed
    sourceType="profile"
    screenName="ItsShotime"
    options={{ height: 400 }}
  />

    <TwitterShareButton
    url={"https://facebook.com/cleverprogrammer"}
    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
  />

  </div>
  )
}

export default Widgets;
