import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkIcon from '@mui/icons-material/Work';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Users } from "../../dummyData"
function Sidebar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoSettingsIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpCenterIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EmojiEventsIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <LibraryBooksIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users?.map((u) => (
                        <li key={u.id} className='sidebarFriend'>
                            <img className='sidebarFriendImg' src={u.profilePicture} alt="" />
                            {/* <img className='sidebarFriendImg' src={`${PF}${u.profilePicture}`} alt="" /> */}
                            <span className='sidebarFriendName'>{u.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
