import React, { useState } from 'react';
import { BsBellFill } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'


const Navbar = () => {



    return (
        <div className="topbar stick">
            <div className="logo">
                <a  href="newsfeed.html"><img src="images/tag2.png" alt="" style={{marginTop:'-1px'}}/></a>
            </div>

            <div className="top-area">


                
                <ul className="setting-area">

                <li  className="nav-item dropdown" style={{marginTop:'8px'}}>

                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                   <img src="images/resources/bell1.png" alt="" style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit'}}/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                    <a className="dropdown-item" href="#">Notification 1</a>
                    <a className="dropdown-item" href="#">Notification 1</a>
                    <a className="dropdown-item" href="#">Notification 1</a>
                </div>
               
            </li>
                  

                   
                     <li  className="nav-item dropdown" >

                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img src="images/resources/admin.jpg" alt="" style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit' , marginBottom:'-7px'}}/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{transform: 'translate3d(-60px, -10px, 0px)'}}>
                            <a className="dropdown-item" href="#">View Profile</a>
                            <a className="dropdown-item" href="#">Edit Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                       
                    </li>


                </ul>
              
            </div>


        </div>

    );
}

export default Navbar;
