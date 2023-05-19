import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/*twitter icon*/}
        <TwitterIcon className='sidebar__twittericon'/>

        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text='Explore'/>
        <SidebarOption Icon={NotificationsActiveIcon} text='Notifications'/>
        <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
        <SidebarOption Icon={ListAltIcon} text='Lists'/>
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
        <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
        <SidebarOption Icon={MoreHorizIcon} text='More'/>


        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
