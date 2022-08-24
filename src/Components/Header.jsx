import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import'./Header.css';
import {IconButton} from '@mui/material';
// import Forum from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='tinder-header'>
      <IconButton className="header-icons" fontSize='large'>
        <PersonIcon fontSize='large'/>
      </IconButton>
      <img src="https://www.svgrepo.com/show/343526/tinder-connection-internet-network-communication-social-media.svg" alt=""/>  
      <IconButton className="header-icons" fontSize='large'>  
        <ForumIcon fontSize='large'/>
      </IconButton>
    </div>
  );
}

export default Header;
