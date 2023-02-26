import React from 'react';

const Navbar = () => {
    return (
        <div className="topbar stick">
            <div className="logo">
            <a title href="newsfeed.html"><img src="images/logo.png" alt="" /></a>
            </div>

            <div className="top-area">
               
                    
                    
                <ul className="setting-area">
                   
                    <li><a href="newsfeed.html" title="Home" data-ripple><i className="ti-home" /></a></li>
                    <li>
                    <a href="#" title="Notification" data-ripple>
                        <i className="ti-bell" /><span>20</span>
                    </a>
                    <div className="dropdowns">
                        <span>4 New Notifications</span>
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
