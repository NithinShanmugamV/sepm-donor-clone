//SEPM BATCH 14 87,88,95
import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import { Link } from 'react-router-dom';
//import {useHistory } from 'react-router-dom';
//import {Linking } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SendIcon from '@material-ui/icons/Send';
import InfoIcon from '@material-ui/icons/Info';
import "./SwipeButtons.css"
function SwipeButtons() {
    return (
        <div className = "swipeButtons">
            <Link to = "/"><IconButton className = "swipeButtons__refresh">
                <ReplayIcon fontSize = "large" />
            </IconButton></Link>
            <IconButton className = "swipeButtons__left">
                <ArrowBackIosIcon fontSize = "large" />
            </IconButton>
            <Link to = "/chat"><IconButton className = "swipeButtons__send">
                <SendIcon fontSize = "large" />
            </IconButton></Link>
            <IconButton className = "swipeButtons__right">
                <ArrowForwardIosIcon fontSize = "large" />
            </IconButton>
            {/*<Link  to = '././https://nithinshanmugamv.github.io/aboutus/sepm/aboutus.html'>*/}
                <a href = "https://nithinshanmugamv.github.io/aboutus/sepm/aboutus.html"> <IconButton className = "swipeButtons__info"><InfoIcon fontSize = "large"  /></IconButton></a>
               
            {/*</Link>*/}
        </div>
    )
}
export default SwipeButtons