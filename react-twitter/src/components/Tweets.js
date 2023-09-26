/* This is a component where a user creates Tweets */

import React from 'react'
import './Tweets.css'
import { Avatar } from '@mui/material'
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";


const Tweets = (avatar, displayName, username, 
 text, timestamp, Image ) => {
  
  return (
    <div className="Tweet">
    
    <div className="tweet__avatar">
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    </div>

    <div className="tweet__body">
    
    <div className="tweet__header">
    
    <div className="tweet__headerText"> 
    
    <h3>Username 
    <span className="tweet__badge">
    <img src="data:image/png;base64,
    iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAYFBMVEX///8dm/AAle8Ak+8Al+8Ake/C3/q62vno8/
    3M5Pvc7fwAj+8UmfCr0/jz+f7H4foyoPGl0Pg4o/
    GfzPeXyfZbrvOx1vh2uvSHwfVKqPJotPPS5/thsfOQxfb4/
    P7h8PzqeT2YAAAENElEQVRoge2a27aiMAyG6QEELXJQUTZufP+3HEBxKLRpWqvMWuN/
    rX62TdIkTRB89dVX/5+2SZbcPs08lruQMRbuyt/
    tx6hRzTgZxVmdfYR6O1FBphL09IH93hBO5uJk827sgS6ovejhzVimxBLCju/
    ERqEGS0j4xq2+6bEd+H3GVQuAK2qvrDhKi0NRNfsgSHWH+zjiNAj2SdV9Oo3i16DZmTPKe1GWX3Joud2C8wt5fpqf3aPJJudTX1367RzMJ3+M89zN0rq4ZAIZRK8O250J4/
    qM4iSxxW5eXeyDbLnXGYVtCCtBrcwr9gK9y+aMT6+f7Sh+wmM9He5dFH/EuUcsITkWm/nb5V4U60xnv1x+RnL9YjtfwmFj+NqxF8O5UuTTmnvRCMVNPe8z4SmKe/
    DOLVbi4pLc1Pf5ItfrNUoO3ArF3bpyqeaAkAGrdfNfwZuz+h+zPYoblE5c1nmpGoy9GI4uBs0GJ/1VgPkvDrtxuQbpoy5TFG4ix9hVXDOH1Ipexu9XuyWY1cYInTGXTaaTqy5bgjuyIUSnUMWnx/
    5Mf6NR/fMQjFluoYpf2+mPqNMGBgStyCky81ryT5VJ99Lfhm5ZMy8lbKGPOjrj+nFZrpB/
    rtKfFP9RYzO3w5XaC2CuoqlZwC6CTqyZ/kTD7TsRW5frQPbLm+GfM1XrBY7KQlkOMylz2hMDl6uaXGBU5qXKUGlhhSWkVHAV4W2CbRUeQqWLpjW0XXqFSyzUExuwC/
    Dfu2AQpnYNly7c6M3qgZ2BqVz2oJxftv5BiZb7xEq36ywoX1DewJaZlna9Uhw8jnFhFpSPOCdUrDfWna8cfh9gkWODsiTF+WrtWchZyh1MJSwQlGXtllh9FslkcHfGQq4s8YFd5b/
    6eBXK4IJR6e2mQfe6lPEKiM9zsByU8bcnU741AfcR02eisTk6jtJ0xqFjojowJjo+f0TTM4RCjgbc1vhd5lftlkF/VgVurzapkTZ5B/
    NJFVhTAKq/D6TuYNxZgnFB+S4ofzbUC3OrRgblQaGh1xBBVZnsx9ig3EmExhYWWA9OwfiapqsHMW9pFeCSf7c6AlNWCZvj+mZgZjkaV4O3ZH6BcU+V0Eru4JtNbYHtb8D20oMRKetEyH6OqX9Fq7a0quCQ/
    Stjv47bYbH9OrODWBZwyP5ksVI/1j8Xt150dojm4uKGW90PCPm+sNZ7SoCOvDhh349Wey9b633Q73uoUBUnavl9/8VZ8yCf7926rFmltd73g8jXPAO3nODwdMQWj/
    vjir3MqzgMB3mYzzm5jUPN55FMRz6dRxLO80i9XOav6PBp+sL81aDHvFmyNxYmfeXVNlVRHF6eN5sJTKwt4qGtwHlCZVPbk1aan4TmRd89qKqZj8WljC9opXlg5fyzy9ygg9aZ9+71nG8Py+PHZ+uTpPnM/n711Vf/
    lv4AGYM64GVWvf0AAAAASUVORK5CYII="

     alt="" className='badgeImage' />
    </span> </h3> <span><h4 className='twitterHandle'>@TwitterHandle</h4></span>
   
    </div>
    <div className="tweet__headerDescription">

    <p> This will be my 1st ever tweet in 2023. 
    Twitter Clone is going to be dope</p>
    </div>

   
    <img src="https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/202007/shomadjozi.jpg?itok=ZfTqogp6"
     alt="" className='tweetImage' />
    
     <div className="tweet__footer">
     <ChatBubbleOutlineIcon fontSize="small"/> <h5 className='stats'>100</h5>
     <RepeatIcon fontSize="small" /> <h5 className='stats'>100</h5>
     <FavoriteBorderIcon fontSize="small" /> <h5 className='stats'>100</h5>
     <PublishIcon fontSize="small" />
     </div> 

    </div>
    </div>

    </div>
  )
}

export default Tweets;