import React from 'react'
import './Feed.css'
import './TweetBox.css'
import TweetBox from './TweetBox';
import Tweets from './Tweets';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


const Feed = () => {
  return (
    <div className="feed">
    {/* Header */}
    <div className="feed__header">
        <h2>Home</h2>
    </div>
 
     {/* Tweetbox */}
     <TweetBox />
      {/* Header */}
     {/* Posts */}
     <Tweets />
     <Tweets />
     <Tweets />
     <Tweets />
     <Tweets />
     {/* Posts */}
     {/* Posts */}
    {/* Posts */}
    {/* Posts */}

    </div>
  )
}

export default Feed
                         