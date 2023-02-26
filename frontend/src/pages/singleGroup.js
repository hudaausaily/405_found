import React from 'react';
import CreatePost from '../components/createPost';
import Navbar from '../components/navbar';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Post from '../components/post';

const SingleGroup = () => {
   
    return (
      <div>
        <div className="theme-layout">
        
         <Navbar/>
          <section>
            <div className="feature-photo">
              <figure><img src="images/resources/timeline-4.jpg" alt="" /></figure>
              <div className="add-btn">
                <span>1.3k followers</span>
                <a href="#" title data-ripple>Add button</a>
              </div>
              <form className="edit-phto">
                <i className="fa fa-camera-retro" />
                <label className="fileContainer">
                  Edit Cover Photo
                  <input type="file" />
                </label>
              </form>
              <div className="container-fluid">
                <div className="row merged">
                  <div className="col-lg-2 col-sm-3">
                    <div className="user-avatar">
                      <figure>
                        <img src="images/resources/user-avatar2.jpg" alt="" />
                        <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Display Photo
                            <input type="file" />
                          </label>
                        </form>
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-10 col-sm-9">
                    <div className="timeline-info">
                      <ul>
                        <li className="admin-name">
                          <h5>Amazon Shop</h5>
                          <span>@amazonshop</span>
                        </li>
                        <li>
                          <a className="active" href="fav-page.html" title data-ripple>Page</a>
                          <a className href="notifications.html" title data-ripple>Notifications</a>
                          <a className href="inbox.html" title data-ripple>inbox</a>
                          <a className href="insights.html" title data-ripple>insights</a>
                          <a className href="fav-page.html" title data-ripple>posts</a>
                          <a className href="page-likers.html" title data-ripple>likers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                     <Sidebar/>
                      <div className="col-lg-6">
                      <CreatePost/>
                        <div className="loadMore">
                          <Post/>
                        </div>
                      </div>
                      <Rightbar/>
                    </div>	
                  </div>
                </div>
              </div>
            </div>	
          </section>
         
          <div className="bottombar">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                  <i><img src="images/credit-cards.png" alt="" /></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          </div>
    );
  
   
}

export default SingleGroup;
