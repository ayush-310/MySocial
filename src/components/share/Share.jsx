import React from 'react'
import "./share.css"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/about2.jpg" alt="" className="shareProfileImg" />
                    <input
                        placeholder="What's in your mind Ayush?"
                        className='shareInput'
                        type="text" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PhotoLibraryIcon  htmlColor='red' />
                            <span className="shareOptionText">Photo or Videos</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor='green' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='orange' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>

        </div>
    )
}

export default Share
