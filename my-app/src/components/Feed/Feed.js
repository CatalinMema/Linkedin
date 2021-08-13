import React, { useEffect, useState } from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create"
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image'
import VideoImage from '@material-ui/icons/Videocam'
import Post from '../Posts/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
function Feed() {
    const [input,setInput]=useState('')
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
    }, [])
    const sendPost = e =>{
        e.preventDefault();
        db.collection('posts').add({
            name:'Catalin',
            description:'emailTest',
            message:input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Start a post" type="text" />
                        <button 
                        onClick={sendPost} type='submit' >Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={VideoImage} title="Video" color="#7FC15E" />
                </div>
            </div>
          {posts.map(({id, data: {name, description,message,photoUrl}})=>(
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
          ))}
        </div>
    )
}

export default Feed
