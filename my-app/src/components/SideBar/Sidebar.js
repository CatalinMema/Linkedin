import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
function Sidebar() {
    const recentItem = (topic) => {
        return ( <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p> 
    </div>)
       
    };
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Mema Catalin</h2>
                <h4>catalin.mema@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className="sidebar__statNumber">12,543</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p> Recent </p>
                {recentItem("Tanks")}
            </div>
        </div>
    )
}

export default Sidebar
