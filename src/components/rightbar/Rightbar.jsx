import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData"


function Rightbar({ profile }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">

          {Users?.map((u) => (
            <li key={u.id} className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                {/* <img src={PF+u.profile_picture} alt="" */}
                <img src={u.profilePicture} alt=""
                  className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{u.username}</span>
            </li>
          ))}
        </ul>
      </>
    )
  }


  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className='rightbarTitle' >User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpeg`} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpeg`} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpeg`} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpeg`} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpeg`} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

      </>
    )
  }
  
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
