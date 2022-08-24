import React from 'react';
import "./Footer.css";
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
function Footer() {
  return (
    <div className='bottomButtons'>
    <IconButton className="button replay">
      <ReplayIcon fontSize='large'/>
    </IconButton>
    
    <IconButton className="button close">
      <CloseIcon fontSize='large'/>
    </IconButton>
    
    <IconButton className="button star">
      <StarRateIcon fontSize='large'/>
    </IconButton>
    
    <IconButton className="button favorite">
      <FavoriteIcon fontSize='large'/>
    </IconButton>
    
    <IconButton className="button flash">
      <FlashOnIcon fontSize='large'/>
    </IconButton>
    </div>
  )
}

export default Footer