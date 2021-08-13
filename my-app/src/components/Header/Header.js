import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Work from '@material-ui/icons/Work';
import Message from '@material-ui/icons/Message';
import Notifications from '@material-ui/icons/Notifications';
import { AccountBox } from '@material-ui/icons';

function Header() {
    return (
        <div className="header"> 
          <div className="header__left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
          </div>
          <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/> 
            <HeaderOption Icon={SupervisorAccount} title="MyNetwork"/> 
            <HeaderOption Icon={Work} title="Jobs"/> 
            <HeaderOption Icon={Message} title="Messages"/> 
            <HeaderOption Icon={Notifications} title="Notification"/> 
            <HeaderOption avatar="https://images.unsplash.com/photo-1624949216539-cd17ef0a1a5a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="me"/> 
          </div>
        </div>
    )
}

export default Header;
 