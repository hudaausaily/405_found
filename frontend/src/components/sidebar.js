import React from 'react';

const Sidebar = () => {
    return (
   
        <div className="col-lg-3">
        <aside className="sidebar static">
          <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
              <li>
                <i className="ti-clipboard" />
                <a href="newsfeed.html" title>Home</a>
              </li>
              <li>
                <i className="ti-user" />
                <a href="timeline-friends.html" title>Profile</a>
              </li>
              <li>
                <i className="ti-mouse-alt" />
                <a href="inbox.html" title>Groups</a>
              </li>
              <li>
                <i className="ti-mouse-alt" />
                <a href="inbox.html" title>Friends</a>
              </li>
              <li>
                <i className="ti-files" />
                <a href="fav-page.html" title>All Users</a>
              </li>
            
              <li>
                <i className="ti-power-off" />
                <a href="landing.html" title>Logout</a>
              </li>
            </ul>
          </div>{/* Shortcuts */}
          <div className="widget stick-widget">
          <h4 className="widget-title">Joined Groups</h4>
          <ul className="followers" id="scrollbar" style={{overflowY:'scroll'}} >
            <li>
              <figure><img src="images/resources/friend-avatar2.jpg" alt="" /></figure>
              <div className="friend-meta">
                <h4><a href="time-line.html" title>Kelly Bill</a></h4>
                <a href="#" title className="underline">Add Friend</a>
              </div>
            </li>
            <li>
              <figure><img src="images/resources/friend-avatar4.jpg" alt="" /></figure>
              <div className="friend-meta">
                <h4><a href="time-line.html" title>Issabel</a></h4>
                <a href="#" title className="underline">Add Friend</a>
              </div>
            </li>
            <li>
              <figure><img src="images/resources/friend-avatar6.jpg" alt="" /></figure>
              <div className="friend-meta">
                <h4><a href="time-line.html" title>Andrew</a></h4>
                <a href="#" title className="underline">Add Friend</a>
              </div>
            </li>
            <li>
              <figure><img src="images/resources/friend-avatar8.jpg" alt="" /></figure>
              <div className="friend-meta">
                <h4><a href="time-line.html" title>Sophia</a></h4>
                <a href="#" title className="underline">Add Friend</a>
              </div>
            </li>
            <li>
              <figure><img src="images/resources/friend-avatar3.jpg" alt="" /></figure>
              <div className="friend-meta">
                <h4><a href="time-line.html" title>Allen</a></h4>
                <a href="#" title className="underline">Add Friend</a>
              </div>
            </li>
          </ul>
        </div>{/* recent activites */}
          <div className="widget stick-widget">
            <h4 className="widget-title">My Groups</h4>
            <ul className="followers" id="scrollbar" style={{overflowY:'scroll'}} >
              <li>
                <figure><img src="images/resources/friend-avatar2.jpg" alt="" /></figure>
                <div className="friend-meta">
                  <h4><a href="time-line.html" title>Kelly Bill</a></h4>
                  <a href="#" title className="underline">Add Friend</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/friend-avatar4.jpg" alt="" /></figure>
                <div className="friend-meta">
                  <h4><a href="time-line.html" title>Issabel</a></h4>
                  <a href="#" title className="underline">Add Friend</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/friend-avatar6.jpg" alt="" /></figure>
                <div className="friend-meta">
                  <h4><a href="time-line.html" title>Andrew</a></h4>
                  <a href="#" title className="underline">Add Friend</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/friend-avatar8.jpg" alt="" /></figure>
                <div className="friend-meta">
                  <h4><a href="time-line.html" title>Sophia</a></h4>
                  <a href="#" title className="underline">Add Friend</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/friend-avatar3.jpg" alt="" /></figure>
                <div className="friend-meta">
                  <h4><a href="time-line.html" title>Allen</a></h4>
                  <a href="#" title className="underline">Add Friend</a>
                </div>
              </li>
            </ul>
          </div>{/* who's following */}
        </aside>
      </div>
      
    );
}

export default Sidebar;
