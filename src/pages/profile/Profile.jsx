import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


function Profile() {

    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className='profileCoverImg'
                                src="assets/post/3.jpeg"
                                // src={`${PF}post/3.jpeg`}
                                alt=""
                            />
                            <img
                                className='profileUserImg'
                                src="assets/person/about2.jpg"
                                // src={`${PF}person/about2.jpg`}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Ayush</h4>
                            <span className='profileInfoDesc'>Hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
