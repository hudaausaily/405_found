import React,{useState} from 'react';


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };
       
       
    return (
        <div className="topbar stick">
            <div className="logo">
            <a title href="newsfeed.html"><img src="images/logo.png" alt="" /></a>
            </div>

            <div className="top-area">
               
                    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
                <ul className="setting-area">
                   
                    <li><a href="" title="Home" data-ripple><i className="ti-home" /></a></li>
                    <li className="nav-item dropdown">
                    <a href="#" title="Notificationnav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-ripple>
                        <i className="ti-bell" /><span>20</span>
                    </a>
                    <div className="dropdowns dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <span>4 New Notifications</span>
                        <ul className="drops-menu">
                        <li>
                            <a href="notifications.html" title >
                            <img src="images/resources/thumb-1.jpg" alt="" />
                            <div className="mesg-meta dropdown-item">
                                <h6>sarah Loren</h6>
                                <span>Hi, how r u dear ...?</span>
                                <i>2 min ago</i>
                            </div>
                            </a>
                            <span className="tag green">New</span>
                        </li>
                        </ul>
                    </div>
                    </li>
                    <li>
                    <a href="#" title="Messages" data-ripple><i className="ti-comment" /><span>12</span></a>
                    <div className="dropdowns">
                        <span>5 New Messages</span>
                        <ul className="drops-menu">
                        <li>
                            <a href="notifications.html" title>
                            <img src="images/resources/thumb-1.jpg" alt="" />
                            <div className="mesg-meta">
                                <h6>sarah Loren</h6>
                                <span>Hi, how r u dear ...?</span>
                                <i>2 min ago</i>
                            </div>
                            </a>
                            <span className="tag green">New</span>
                        </li>
                        </ul>
                        <a href="messages.html" title className="more-mesg">view more</a>
                    </div>
                    </li>
                    
                </ul>
                <div className="user-img">
                    <img src="images/resources/admin.jpg" alt="" />
                    <span className="status f-online" />
                    <div className="user-setting">
                    <a href="#" title><span className="status f-online" />online</a>
                    <a href="#" title><span className="status f-away" />away</a>
                    <a href="#" title><span className="status f-off" />offline</a>
                    <a href="#" title><i className="ti-user" /> view profile</a>
                    <a href="#" title><i className="ti-pencil-alt" />edit profile</a>
                    <a href="#" title><i className="ti-target" />activity log</a>
                    <a href="#" title><i className="ti-settings" />account setting</a>
                    <a href="#" title><i className="ti-power-off" />log out</a>
                    </div>
                </div>
            </div>
         
  
         </div>
         
    );
}

export default Navbar;
