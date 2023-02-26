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
                <a href="newsfeed.html" title>News feed</a>
              </li>
              <li>
                <i className="ti-mouse-alt" />
                <a href="inbox.html" title>Inbox</a>
              </li>
              <li>
                <i className="ti-files" />
                <a href="fav-page.html" title>My pages</a>
              </li>
              <li>
                <i className="ti-user" />
                <a href="timeline-friends.html" title>friends</a>
              </li>
              <li>
                <i className="ti-image" />
                <a href="timeline-photos.html" title>images</a>
              </li>
              <li>
                <i className="ti-video-camera" />
                <a href="timeline-videos.html" title>videos</a>
              </li>
              <li>
                <i className="ti-comments-smiley" />
                <a href="messages.html" title>Messages</a>
              </li>
              <li>
                <i className="ti-bell" />
                <a href="notifications.html" title>Notifications</a>
              </li>
              <li>
                <i className="ti-share" />
                <a href="people-nearby.html" title>People Nearby</a>
              </li>
              <li>
                <i className="fa fa-bar-chart-o" />
                <a href="insights.html" title>insights</a>
              </li>
              <li>
                <i className="ti-power-off" />
                <a href="landing.html" title>Logout</a>
              </li>
            </ul>
          </div>{/* Shortcuts */}
        </aside>
      </div>
    );
}

export default Sidebar;
