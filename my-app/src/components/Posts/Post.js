import { Avatar } from '@material-ui/core';
import React from 'react'
import InputOption from '../InputOption/InputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import './Post.css';
function Post({name,description,message,photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
           <div className="post__body">
                <p>{message}</p>

           </div>
           <div className="post__buttons">
               <InputOption Icon={ThumbUpIcon} title="Like"/>
               <InputOption Icon={ChatBubbleIcon} title="Comment"/>
               <InputOption Icon={ShareIcon} title="Share"/>
               <InputOption Icon={SendIcon} title="Send"/>
           </div>
        </div>
    )
}

export default Post
